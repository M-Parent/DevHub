[default][Roadmap(linux)]

# Automated Ubuntu Server ISO (≥20.04)

[image]

## Download The iso

- Download the iso file from the official web site [Ubuntu live Server 24.04](https://ubuntu.com/download/server/thank-you?version=24.04.3&architecture=amd64&lts=true)
- Import it into a ubuntu host

---

## Step 1 – Prepare the autoinstall.yaml file

Create a file **autoinstall.yaml** with the following content:

```yaml
#cloud-config
autoinstall:
  version: 1

  locale: en_US
  keyboard:
    layout: us

  identity:
    hostname: devbox
    username: ubuntu
    password: "$6$rounds=4096$REPLACE_WITH_HASH"

  ssh:
    install-server: true
    allow-pw: true

  network:
    network:
      version: 2
      ethernets:
        all:
          match:
            name: "e*"
          dhcp4: false
          addresses:
            - 10.0.20.x/24
          gateway4: 10.0.20.1
          nameservers:
            addresses:
              - 1.1.1.1
              - 8.8.8.8

  storage:
    layout:
      name: direct

  packages:
    - openssh-server
    - curl
    - git
    - vim
    - htop

  late-commands:
    - curtin in-target -- systemctl enable ssh
```

> [!NOTE]
> Note: Generate a hashed password with:
>
> ```bash
> openssl passwd -6
> ```
>
> and replace $6$rounds=4096$REPLACE_WITH_HASH with the result.

---

## Step 2 – Mount and copy the official Ubuntu ISO

```bash

mkdir iso
sudo mount -o loop ubuntu-22.04-live-server.iso iso
mkdir custom_iso
cp -r iso/* custom_iso/
sudo umount iso

```

---

## Step 3 – Add autoinstall files

```bash

mkdir -p custom_iso/nocloud
cp autoinstall.yaml custom_iso/nocloud/user-data
touch custom_iso/nocloud/meta-data

```

---

## Step 4 – Update GRUB to enable autoinstall

Edit custom_iso/boot/grub/grub.cfg and replace the linux lines with:

```bash

linux   /casper/vmlinuz autoinstall ds=nocloud\;s=/cdrom/nocloud/ ---
linux   /casper/hwe-vmlinuz autoinstall ds=nocloud\;s=/cdrom/nocloud/ ---

```

- autoinstall → enables automated installation
- ds=nocloud\;s=/cdrom/nocloud/ → points to your autoinstall files
- --- → required end-of-options marker

---

## Step 5 – Build the custom ISO

```bash

xorriso -as mkisofs \
  -r -V "DevBox-Autoinstall" \
  -o devbox-ubuntu24.04-server.iso \
  -J -l \
  -b boot/grub/i386-pc/eltorito.img \
  -no-emul-boot \
  -boot-load-size 4 \
  -boot-info-table \
  custom_iso

```

---

## Step 7 – Boot and verify

- Boot from USB
- Installation is fully automated: no prompts
- User is created, hostname and IP set, SSH enabled
- Packages installed, full disk used
- Ready for Ansible / Terraform provisioning

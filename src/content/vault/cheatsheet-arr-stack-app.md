[cheatsheet]

# 🧠 ARR Stack Cheatsheet

Your quick-reference guide to the most common apps used in a full **ARR automation ecosystem**.  
Each tool plays a unique role — from downloading to organizing, streaming, and monitoring your media.

---

## 🎬 Media Servers

| Tool            | Description                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Plex** 💎     | A polished and feature-rich media server that organizes and streams your movies, shows, and music to nearly any device. Supports remote access via Plex Cloud. |
| **Jellyfin** 🐧 | A 100% free, open-source alternative to Plex. Self-hosted, fully private, with extensive customization and plugin support.                                     |

---

## 📺 Media Management & Automation

| Tool              | Description                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sonarr** 📺     | Automatically tracks, searches, and downloads new TV show episodes from your indexers and sends them to your downloader.                    |
| **Radarr** 🎥     | Works just like Sonarr, but for movies. Handles searching, downloading, renaming, and organizing your film library.                         |
| **Readarr** 📚    | Manages your ebooks and audiobooks. Finds, downloads, and organizes reading materials from supported sources.                               |
| **Lidarr** 🎵     | Automates music downloads and metadata management for albums and artists. Ideal for maintaining a complete music library.                   |
| **Profilearr** ⚙️ | Centralizes and synchronizes quality and release profiles across multiple Sonarr/Radarr instances for consistent automation.                |
| **Cleanuparr** 🧹 | Automatically cleans up media files, empty folders, and leftover downloads to keep your directories neat and organized.                     |
| **Huntarr** 🕵️‍♂️    | Scans your existing library to identify missing, incomplete, or poorly named media files — helps keep your collection healthy and complete. |

---

## ⚡ Download & Privacy

| Tool                | Description                                                                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **qBittorrent** ⚡  | A powerful open-source torrent client used by Sonarr and Radarr to download requested content. Supports WebUI integration.                                            |
| **Gluetun** 🔒      | A lightweight VPN container that routes all traffic from qBittorrent (and other apps) securely through a VPN for privacy and IP protection.                           |
| **FlareSolverr** 🔥 | Acts as a proxy server to bypass Cloudflare and other anti-bot challenges for Prowlarr and indexers. Essential for scraping certain protected torrent sites reliably. |

---

## 💬 Subtitles & Transcoding

| Tool          | Description                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Bazarr** 💬 | Automatically searches, downloads, and manages subtitles for your movies and shows, integrating directly with Sonarr and Radarr. |
| **Tdarr** 🎞️  | Transcodes and optimizes your media files automatically using GPU or CPU, saving space and improving playback compatibility.     |

---

## 🕵️ Indexing, Requests & User Access

| Tool              | Description                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Prowlarr** 🧭   | Centralized indexer manager for Sonarr, Radarr, Lidarr, and Readarr. Handles all torrent/usenet indexers in one place.      |
| **Overseerr** 🍿  | Beautiful request management system for Plex. Lets users request new movies or shows directly from your Plex library.       |
| **Jellyseerr** 🍿 | A fork of Overseerr built specifically for Jellyfin servers — same interface, but integrated with Jellyfin instead of Plex. |
| **Wizarr** 🧙‍♂️     | Simplifies onboarding for new Plex/Jellyfin users by generating custom invitation links and automating account creation.    |

---

## 📊 Monitoring & Analytics

| Tool            | Description                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Tautulli** 📈 | Tracks and monitors Plex activity — who’s watching what, when, and where. Great for usage stats and performance insights. |

---

## ⚙️ Summary

![test](assets/img/server/ARR-Stack-Cheatsheet-number.png)

🧩 Together, these apps form the **ARR Stack** — an automated ecosystem that:

1. **Finds** content (4.Prowlarr, 5.Overseerr, Jellyseerr, 14.Huntarr)
2. **Downloads** it securely (6.Sonarr, 7.Radarr, 8.Readarr, 9.Lidarr, 12.qBittorrent, 3.Gluetun, **FlareSolverr**)
3. **Organizes & enhances** it (15.Bazarr, 10.Tdarr, 11.Cleanuparr, 16.Profilearr)
4. **Hosts & streams** it (1.Plex, 2.Jellyfin)
5. **Monitors & manages users** (13.Tautulli, 17.Wizarr)

> 💡 The ARR Stack is like having your own personal Netflix — fully automated, completely private, and entirely under your control.

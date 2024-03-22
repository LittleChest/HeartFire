---
layout: home
title: Heart Fire Project
titleTemplate: false

hero:
  name: Heart Fire Project
  tagline: A Project about Minecraft
  image:
    src: /logo.png
    alt: Heart Fire Project
  actions:
    - theme: brand
      text: View Maps
      link: "./maps"
    - theme: alt
      text: Contact Us
      link: "#Contact Us"

features:
  - icon: 🤔
    title: What is the Heart Fire Project?
    details: The Heart Fire Project is a passionate community of Minecraft players. Our mission is to make every Minecraft world understood and enjoyed by the majority of players through translation and sharing.
  - icon: 🧭
    title: Breaking through language barriers, sharing the world.
    details: Our team is dedicated to translating Minecraft maps. We are committed to enabling more players to understand the stories and environments of these worlds, making language no longer a barrier to exploring new realms.
  - icon: 💝
    title: Creating and sharing high-quality Minecraft experiences.
    details: In the Heart Fire Project, we firmly believe that innovation and creativity drive us forward. We encourage every member to infuse their imagination into the world of Minecraft, creating unique maps that allow every player to experience different adventures.
---

<script setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

import { VPTeamMembers } from 'vitepress/theme'
const mail = {svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 900 900"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>'}
const qq = {svg:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M454.943 278.922a67.951 67.951 0 0 0-28.276-17.002v-91.254C426.667 76.409 350.258 0 256 0S85.333 76.409 85.333 170.667v91.254a67.929 67.929 0 0 0-28.276 17.002c-26.66 26.662-26.66 69.883 0 96.544l28.276-28.276V358.4c0 47.502 19.418 90.453 50.736 121.392C130.925 489.387 128 500.35 128 512h256c0-11.65-2.925-22.613-8.071-32.208 31.319-30.937 50.737-73.89 50.737-121.392v-11.209l28.276 28.276c26.661-26.662 26.661-69.883.001-96.545M375.467 358.4c0 34.256-14.345 66.045-39.18 88.489a68.22 68.22 0 0 0-20.553-3.156c-25.709 0-48.09 14.218-59.733 35.215-11.643-20.997-34.024-35.215-59.733-35.215a68.153 68.153 0 0 0-20.553 3.156c-24.835-22.444-39.18-54.231-39.18-88.489V145.067c0-42.347 34.453-76.8 76.8-76.8 15.439 0 30.15 4.512 42.667 12.919 12.517-8.407 27.226-12.919 42.667-12.919 42.349 0 76.8 34.453 76.8 76.8V358.4z"/><path d="m256 187.733-51.2 34.134 51.2 51.2 51.2-51.2z"/></svg>'}
const members = [
  {
    avatar: 'https://littleskin.cn/avatar/138166',
    name: 'LittleChest',
    title: '卖萌',
    desc: "饿饿，饭饭~",
    links: [
      { icon: 'github', link: 'https://github.com/LittleChest' },
      { icon: 'discord', link: 'https://discord.com/users/894903639808831488' },
      { icon: qq, link: 'http://wpa.qq.com/msgrd?uin=2191038130' },
      { icon: 'x', link: 'https://twitter.com/littlechestw' },
      { icon: mail, link: 'mailto:little@littlew.top' }
    ],
    sponsor: "https://afdian.net/a/LittleChest",
    actionText: 'Sponsor'
  },
  {
    avatar: 'https://littleskin.cn/avatar/414892',
    name: 'Beiyao',
    title: 'owner/admin',
    desc: "You can call me 北遥/北药/beiyao",
    links: [
      { icon: 'github', link: 'https://github.com/beiyaohhhc' },
      { icon: 'discord', link: 'https://discord.com/users/844536118895706152' },
      { icon: qq, link: 'http://wpa.qq.com/msgrd?uin=2383615282' },
      { icon: 'x', link: 'https://twitter.com/beiyao5200' },
      { icon: mail, link: 'mailto:beiyao.chen@qq.com' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/263879',
    name: 'MeowBot_NEKO',
    title: 'Translator',
    links: [
      { icon: 'github', link: 'https://github.com/Seayay' },
      { icon: mail, link: 'mailto:1kyr@hfpro.top' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/415151',
    name: 'HeimNad',
    title: 'Technologists',
    desc: "Maximum idlers for the Heart Fire Project",
    links: [
      { icon: 'github', link: 'https://github.com/HeimNad' },
      { icon: qq, link: 'http://wpa.qq.com/msgrd?uin=5278626' },
      { icon: mail, link: 'mailto:5278626@qq.com' }
    ],
    sponsor: "https://payme.heimnad.top",
    actionText: 'Sponsor'
  },
  {
    avatar: 'https://littleskin.cn/avatar/364649',
    name: 'P1ge0nLee0',
    title: 'Handyman/Translator/Publicist',
    desc: "Coo coo coo, coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo coo.",
    links: [
      { icon: 'github', link: 'https://github.com/GGHePinGG' },
      { icon: 'discord', link: 'https://discord.com/users/843090662350127114' },
      { icon: qq, link: 'http://wpa.qq.com/msgrd?uin=1434230923' },
      { icon: 'x', link: 'https://twitter.com/IamHePingGe' },
      { icon: 'youtube', link: 'https://www.youtube.com/@P1ge0nLee0' },
      { icon: mail, link: 'mailto:me@lee0p1ge0n.top' }
    ]
  }
]

if (useData().isDark.value === true) {
  var giscus_theme = "dark"
} else {
  var giscus_theme = "light"
}
var giscus_theme
</script>
<br />
<br />
<br />
<br />

# Member List

<VPTeamMembers size="small" :members="members" />

<br />

# Sponsor List

[![Sponsor List](https://afdian.hfpro.top/sponsor.svg)](https://afdian.net/a/HfPro)

# Contact Us

Talk to us directly via GitHub Discussions.

### Disabled

Alternatively, send an e-mail to [admin@hfpro.top](mailto:admin@hfpro.top).

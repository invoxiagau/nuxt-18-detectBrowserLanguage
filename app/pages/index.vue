<template>
  <h1>{{ $t("home") }}</h1>
  <ul>
    <li>
      <NuxtLinkLocale :to="{ name: 'generic-page' }">
        {{ $t("nuxtLinkLocaleWithRouteName") }}
      </NuxtLinkLocale>
    </li>

    <li>
      <NuxtLinkLocale :to="'/generic-page'">
        {{ $t("nuxtLinkLocaleWithRoutePath") }}
      </NuxtLinkLocale>
    </li>

    <li>
      <NuxtLink :to="localePath('/generic-page')">
        {{ $t("nuxtLinkWithLocalePath") }}
      </NuxtLink>
    </li>

    <li>
      <a :href="`${locale === 'en' ? '' : '/' + locale}/generic-page`">
        {{ $t("plainHrefWithLocaleInPath") }}
      </a>
    </li>
  </ul>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div>
    <h1>{{ $t("genericPage") }}</h1>
    <NuxtLinkLocale :to="{ name: 'index' }">
      {{ $t("home") }}
    </NuxtLinkLocale>
  </div>
</template>

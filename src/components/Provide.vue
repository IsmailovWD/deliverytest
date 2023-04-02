<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider>
          <n-notification-provider>
            <n-loading-bar-provider>
              <App />
            </n-loading-bar-provider>
          </n-notification-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script setup>
import App from '../App.vue'
const themeOverrides = {
  "Spin": {
    "textColor": "rgba(84, 105, 212, 1)",
    "color": "#5469D4FF"
  },
  "Dialog": {
    "iconColor": "#5469D4FF",
    "iconColorSuccess": "#5469D4FF"
  },
  "common": {
    "primaryColor": "#5469D4FF",
    "primaryColorHover": "#8595E4FF",
    "primaryColorPressed": "#14278BFF"
  }
}
</script>
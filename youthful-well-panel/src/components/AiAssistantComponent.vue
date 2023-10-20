<template>
  <div id="chat-container"></div>
  <p>Here watsonx Assistant</p>
</template>
<script>
export default {
  mounted() {
    window.watsonAssistantChatOptions = {
      integrationID: import.meta.env.VITE_INTEGRATION_ID, // The ID of this integration.
      region: 'eu-de', // The region your integration is hosted in.
      serviceInstanceID: import.meta.env.VITE_SERVICE_INSTANCE_ID, // The ID of your service instance.
      onLoad: function (instance) {
        instance.render()
      }
    }
    setTimeout(function () {
      const t = document.createElement('script')
      t.src =
        'https://web-chat.global.assistant.watson.appdomain.cloud/versions/' +
        (window.watsonAssistantChatOptions.clientVersion || 'latest') +
        '/WatsonAssistantChatEntry.js'

      // Select the target element by its id
      const targetElement = document.getElementById('chat-container')
      // Append the new content to the target element
      targetElement.appendChild(t)

      // document.head.appendChild(t)
    })
  }
}
</script>
<style></style>

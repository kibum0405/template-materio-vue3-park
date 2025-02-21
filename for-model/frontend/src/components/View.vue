forEach: View
fileName: {{namePascalCase}}View.vue
---
<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: '{{namePascalCase}}View',
    props: {
        value: Object,
        editMode: Boolean,
        isNew: Boolean
    },
    setup() {
        const headers = ref([
            // 필드 디스크립터를 기반으로 헤더 설정
            {{#fieldDescriptors}}
            { text: "{{nameCamelCase}}", value: "{{nameCamelCase}}" },
            {{/fieldDescriptors}}
        ]);

        const items = ref([]);

        onMounted(async () => {
            try {
                const response = await axios.get('/{{namePlural}}');
                const data = response.data._embedded.{{namePlural}};
                data.forEach(obj => {
                    obj.id = obj._links.self.href.split("/").pop();
                });
                items.value = data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });

        return {
            headers,
            items
        };
    }
}
</script>

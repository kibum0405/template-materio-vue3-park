forEach: Model
fileName: index.js
path: for-model/frontend-materio/src/router
---
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../components/pages/Index.vue'),
    },
{{#boundedContexts}}
  {{#aggregates}}
    {
      path: '/{{namePlural}}',
      component: () => import('../components/ui/{{namePascalCase}}Grid.vue'),
    },
  {{/aggregates}}
  {{#views}}
    {{#ifEquals dataProjection "cqrs"}}
    {
      path: '/{{namePlural}}',
      component: () => import('../components/{{namePascalCase}}View.vue'),
    },
    {{/ifEquals}}
  {{/views}}
{{/boundedContexts}}
  ],
})

export default router;

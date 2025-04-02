forEach: Model
fileName: index.js
path: for-model/frontend/src/router
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
  {{#if name}}
    {
      path: '/{{boundedContext.namePlural}}/{{namePlural}}',
      component: () => import('../components/ui/{{namePascalCase}}Grid.vue'),
    },
  {{/if}}
  {{/aggregates}}
  {{#views}}
    {{#ifEquals dataProjection "cqrs"}}
    {
      path: '/{{boundedContext.namePlural}}/{{namePlural}}',
      component: () => import('../components/{{namePascalCase}}View.vue'),
    },
    {{/ifEquals}}
  {{/views}}
{{/boundedContexts}}
  ],
})

export default router;

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { 
    path: '**',
    renderMode: RenderMode.Server
  }, 
  { 
    path: 'details/:id',
    renderMode: RenderMode.Prerender
  },
  { 
    path: 'checkout',
    renderMode: RenderMode.Server
  },
  { 
    path: 'about',
    renderMode: RenderMode.Prerender
  },
];

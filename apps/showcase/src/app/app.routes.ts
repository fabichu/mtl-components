import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'accordion',
    loadComponent: async () => (await import('./components/accordion-showcase/accordion-showcase.component')).AccordionShowcaseComponent
  },
  {
    path: 'tabs',
    loadComponent: async () => (await import('./components/tabs-showcase/tabs-showcase.component')).TabsShowcaseComponent
  },
  {
    path: 'dropdown',
    loadComponent: async () => (await import('./components/dropdown-showcase/dropdown-showcase.component')).DropdownShowcaseComponent
  },
  {
    path: 'toast',
    loadComponent: async () => (await import('./components/toast-showcase/toast-showcase.component')).ToastShowcaseComponent
  },
  {
    path: 'button',
    loadComponent: async () => (await import('./components/button-showcase/button-showcase.component')).ButtonShowcaseComponent
  },
  {
    path: 'toggle',
    loadComponent: async () => (await import('./components/toggle-showcase/toggle-showcase.component')).ToggleShowcaseComponent
  },
  {
    path: 'modal',
    loadComponent: async () => (await import('./components/modal-showcase/modal-showcase.component')).ModalShowcaseComponent
  },
  {
    path: 'card',
    loadComponent: async () => (await import('./components/card-showcase/card-showcase.component')).CardShowcaseComponent
  }
];

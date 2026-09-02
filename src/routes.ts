/**
 * Central route path constants for D'E Chosen Events Consultants.
 * Use these everywhere instead of hard-coding path strings.
 */
export const ROUTES = {
  home:               '/',
  culinarySchool:     '/culinary-school',
  catering:           '/catering',
  eventManagement:    '/event-management',
  facilityCleaning:   '/facility-cleaning',
  consultancy:        '/hospitality-consultancy',
  chefPeter:          '/about-chef-peter',
  contact:            '/contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

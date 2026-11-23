import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '588'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '434'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '8ae'),
            routes: [
              {
                path: '/about',
                component: ComponentCreator('/about', '999'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airport-recommend',
                component: ComponentCreator('/airport-recommend', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/byjd',
                component: ComponentCreator('/airports/byjd', '712'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/dly',
                component: ComponentCreator('/airports/dly', 'b4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/emy',
                component: ComponentCreator('/airports/emy', 'bb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/ff',
                component: ComponentCreator('/airports/ff', 'e52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/flyv',
                component: ComponentCreator('/airports/flyv', '880'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/fmy',
                component: ComponentCreator('/airports/fmy', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/gnt',
                component: ComponentCreator('/airports/gnt', 'c70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/gsy',
                component: ComponentCreator('/airports/gsy', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/jly',
                component: ComponentCreator('/airports/jly', 'dd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/kjy',
                component: ComponentCreator('/airports/kjy', '5cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/kl',
                component: ComponentCreator('/airports/kl', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/kxy',
                component: ComponentCreator('/airports/kxy', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/ldy',
                component: ComponentCreator('/airports/ldy', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/lmwl',
                component: ComponentCreator('/airports/lmwl', '750'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/lw',
                component: ComponentCreator('/airports/lw', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/mgjs',
                component: ComponentCreator('/airports/mgjs', '7e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/qqy',
                component: ComponentCreator('/airports/qqy', 'fcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/sgy',
                component: ComponentCreator('/airports/sgy', 'b18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/sj',
                component: ComponentCreator('/airports/sj', 'c0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/sy',
                component: ComponentCreator('/airports/sy', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/tzy',
                component: ComponentCreator('/airports/tzy', 'cbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/u1s1',
                component: ComponentCreator('/airports/u1s1', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/wfwl',
                component: ComponentCreator('/airports/wfwl', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/wty',
                component: ComponentCreator('/airports/wty', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/wylj',
                component: ComponentCreator('/airports/wylj', '49c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/yfy',
                component: ComponentCreator('/airports/yfy', 'd9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/yxr',
                component: ComponentCreator('/airports/yxr', '17a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/airports/yzy',
                component: ComponentCreator('/airports/yzy', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-lab',
                component: ComponentCreator('/android-lab', 'a8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/config-lab',
                component: ComponentCreator('/config-lab', 'd7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/controller-lab',
                component: ComponentCreator('/controller-lab', 'ef3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dns-lab',
                component: ComponentCreator('/dns-lab', 'd4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/downloads',
                component: ComponentCreator('/downloads', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', 'a3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-lab',
                component: ComponentCreator('/ios-lab', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab-errors',
                component: ComponentCreator('/lab-errors', '7c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/linux-lab',
                component: ComponentCreator('/linux-lab', 'efc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-lab',
                component: ComponentCreator('/mac-lab', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mihomo',
                component: ComponentCreator('/mihomo', '544'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/node-lab',
                component: ComponentCreator('/node-lab', 'f76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/provider-lab',
                component: ComponentCreator('/provider-lab', '574'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/proxy-basics',
                component: ComponentCreator('/proxy-basics', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/proxy-lab',
                component: ComponentCreator('/proxy-lab', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/routing-lab',
                component: ComponentCreator('/routing-lab', '30b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tun-lab',
                component: ComponentCreator('/tun-lab', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/upgrade-lab',
                component: ComponentCreator('/upgrade-lab', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/upstream',
                component: ComponentCreator('/upstream', '835'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/verge-lab',
                component: ComponentCreator('/verge-lab', 'd62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/windows-lab',
                component: ComponentCreator('/windows-lab', '3f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

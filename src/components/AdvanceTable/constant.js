import React from 'react';
import { Icon, Button, Avatar, Badge} from '../../index';

export const data = [
    {
      id: 1,
      name: 'Frozen yogurt',
      type: 'Ice cream',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: 14,
      iron: 1,
    }, {
      id: 2,
      name: 'Ice cream sandwhich',
      type: 'Ice cream',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: 8,
      iron: 1,
    }, {
      id: 3,
      name: 'Eclair',
      type: 'Pastry',
      calories: 262,
      fat: 16.0,
      carbs: 37,
      protein: 6.0,
      sodium: 337,
      calcium: 6,
      iron: 7,
    }, {
      id: 4,
      name: 'Cupcake',
      type: 'Pastry',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      sodium: 413,
      calcium: 3,
      iron: 8,
    }, {
      id: 5,
      name: 'Gingerbread',
      type: 'Pastry',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      sodium: 327,
      calcium: 7,
      iron: 16,
    }, {
      id: 6,
      name: 'Jelly bean',
      type: 'Other',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      sodium: 50,
      calcium: 0,
      iron: 0,
    }, {
      id: 7,
      name: 'Lollipop',
      type: 'Other',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0.0,
      sodium: 38,
      calcium: 0,
      iron: 2,
    }, {
      id: 8,
      name: 'Honeycomb',
      type: 'Other',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      sodium: 562,
      calcium: 0,
      iron: 45,
    }, {
      id: 9,
      name: 'Donut',
      type: 'Pastry',
      calories: 52,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      sodium: 326,
      calcium: 2,
      iron: 22,
    }, {
      id: 10,
      name: 'KitKat',
      type: 'Other',
      calories: 16,
      fat: 6.0,
      carbs: 65,
      protein: 7.0,
      sodium: 54,
      calcium: 12,
      iron: 6,
    },
  ];


export const columns = [
    {
      cell: row => <Icon size={16} icon="endorsed" />,
      allowOverflow: true,
      button: true,
      width: '56px', // custom width for icon button
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      grow: 2,
    },
    {
      name: 'Type',
      selector: 'type',
      sortable: true,
    },
    {
      name: 'Calories (g)',
      selector: 'calories',
      sortable: true,
      right: true,
    },
    {
      name: 'Fat (g)',
      selector: 'fat',
      sortable: true,
      right: true,
    },
    {
      name: 'Carbs (g)',
      selector: 'carbs',
      sortable: true,
      right: true,
    },
    {
      name: 'Protein (g)',
      selector: 'protein',
      sortable: true,
      right: true,
    },
    {
      name: 'Sodium (mg)',
      selector: 'sodium',
      sortable: true,
      right: true,
    },
    {
      name: 'Calcium (%)',
      selector: 'calcium',
      sortable: true,
      right: true,
    },
    {
      name: 'Iron (%)',
      selector: 'iron',
      sortable: true,
      right: true,
    },
    {
        cell: () => <Button btnType="primary" btnVariant="contained" icon="add"> </Button>,
        button: true,
    },
  ];

  export const TransData = [
    {
      name: 'Satish Maurya',
      card: '**** 9058',
      date: '29.03.2018',
      amount: '$6,542.32',
      status: "paid",
      avatar: "https://lh3.googleusercontent.com/a-/AOh14Ghswtzu3rnt1tWVdCnc9xEBjRbq9eFNo0u6DnKNLQ=s56-c-k-no"
    },
    {
        name: 'Vaishali Chaudhary',
        card: '**** 6950',
        date: '29.03.2018',
        amount: '$6,542.32',
        status: "fail",
        avatar: "https://lh5.googleusercontent.com/-3jvJBiUD2Js/AAAAAAAAAAI/AAAAAAAAAZM/pLD1BJTWE7cKHrwqmCRjRr6Q6GzkytmEgCLcDEAE/s64-c-k-no-mo/photo.jpg"
    },
    {
        name: 'Kajol Singh',
        card: '**** 8415',
        date: '29.03.2018',
        amount: '$6,542.32',
        status: "paid",
        avatar: "https://lh6.googleusercontent.com/-1UpYgUv_Zx8/AAAAAAAAAAI/AAAAAAAAAlg/OvpwHSip_HkeNFPh9Q6Nj46J4cidHn7SwCLcDEAE/s80-c-k-no-mo/photo.jpg"
    },
    {
        name: 'Shubham Mishra',
        card: '**** 2015',
        date: '29.03.2018',
        amount: '$6,542.32',
        status: "fail",
        avatar: "https://lh5.googleusercontent.com/-13SFS5l_xoE/AAAAAAAAAAI/AAAAAAAABIA/wrANEDB_9n4kcITtO1lWF-KQkCUmfNz7wCLcDEAE/s80-c-k-no-mo/photo.jpg"
    },

  ]

  export const TransColumns = [
    {
      cell: row => <Avatar size="sm" src={row.avatar} alt="smallAvatar" />,
      allowOverflow: true,
      button: true,
      width: '56px', // custom width for icon button
    },
    {
        name: 'NAME',
        selector: 'name',
        sortable: true,
        grow: 2,
      },
    {
        name: 'CARD',
        selector: 'card',
        sortable: true,
        grow: 2,
    },
    {
        name: 'DATE',
        selector: 'date',
        sortable: true,
        grow: 2,
      },
      {
        name: 'AMOUNT',
        selector: 'amount',
        sortable: true,
        grow: 2,
      },
      {
        name: 'STATUS',
        cell: row => <>{row.status==='paid'?<Badge variant="success">Paid</Badge>:<Badge variant="danger">Failed</Badge>}</>,
        selector: 'status'
      }
]
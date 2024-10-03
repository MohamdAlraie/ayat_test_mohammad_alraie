// // src/api/data.ts

import { Service } from "../features/auth/types";


export const servicesData: Service[] = [
  {
    id: "1",
    name: "Healthcare Services",
    children: [
      {
        id: "1-1",
        name: "General Consultation",
        children: [
          { id: "1-1-1", name: "Pediatrics" },
          { id: "1-1-2", name: "Internal Medicine" },
        ],
      },
      {
        id: "1-2",
        name: "Emergency Services",
        children: [
          { id: "1-2-1", name: "Ambulance" },
          { id: "1-2-2", name: "Trauma Care" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Education Services",
    children: [
      {
        id: "2-1",
        name: "Primary Education",
        children: [
          { id: "2-1-1", name: "Kindergarten" },
          { id: "2-1-2", name: "Elementary School" },
        ],
      },
      {
        id: "2-2",
        name: "Secondary Education",
        children: [
          { id: "2-2-1", name: "Middle School" },
          { id: "2-2-2", name: "High School" },
        ],
      },
      {
        id: "2-3",
        name: "Higher Education",
        children: [
          { id: "2-3-1", name: "Undergraduate Programs" },
          { id: "2-3-2", name: "Postgraduate Programs" },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Transportation Services",
    children: [
      {
        id: "3-1",
        name: "Public Transportation",
        children: [
          { id: "3-1-1", name: "Bus Services" },
          { id: "3-1-2", name: "Subway Services" },
          { id: "3-1-3", name: "Train Services" },
        ],
      },
      {
        id: "3-2",
        name: "Private Transportation",
        children: [
          { id: "3-2-1", name: "Taxi Services" },
          { id: "3-2-2", name: "Ride Sharing" },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Financial Services",
    children: [
      {
        id: "4-1",
        name: "Banking",
        children: [
          { id: "4-1-1", name: "Checking Accounts" },
          { id: "4-1-2", name: "Savings Accounts" },
          { id: "4-1-3", name: "Loans and Mortgages" },
        ],
      },
      {
        id: "4-2",
        name: "Investment Services",
        children: [
          { id: "4-2-1", name: "Stocks and Bonds" },
          { id: "4-2-2", name: "Retirement Planning" },
        ],
      },
      {
        id: "4-3",
        name: "Insurance",
        children: [
          { id: "4-3-1", name: "Health Insurance" },
          { id: "4-3-2", name: "Life Insurance" },
          { id: "4-3-3", name: "Auto Insurance" },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Technology Services",
    children: [
      {
        id: "5-1",
        name: "Software Development",
        children: [
          { id: "5-1-1", name: "Web Development" },
          { id: "5-1-2", name: "Mobile App Development" },
          { id: "5-1-3", name: "Desktop Applications" },
        ],
      },
      {
        id: "5-2",
        name: "IT Support",
        children: [
          { id: "5-2-1", name: "Network Administration" },
          { id: "5-2-2", name: "Technical Support" },
        ],
      },
      {
        id: "5-3",
        name: "Cloud Services",
        children: [
          { id: "5-3-1", name: "Cloud Storage" },
          { id: "5-3-2", name: "Cloud Computing" },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Hospitality Services",
    children: [
      {
        id: "6-1",
        name: "Accommodation",
        children: [
          { id: "6-1-1", name: "Hotels" },
          { id: "6-1-2", name: "Hostels" },
          { id: "6-1-3", name: "Vacation Rentals" },
        ],
      },
      {
        id: "6-2",
        name: "Food and Beverage",
        children: [
          { id: "6-2-1", name: "Restaurants" },
          { id: "6-2-2", name: "Cafes" },
          { id: "6-2-3", name: "Catering Services" },
        ],
      },
      {
        id: "6-3",
        name: "Travel and Tourism",
        children: [
          { id: "6-3-1", name: "Tour Operators" },
          { id: "6-3-2", name: "Travel Agencies" },
        ],
      },
    ],
  },
];
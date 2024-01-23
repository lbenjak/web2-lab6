// announcementStore.js
import { defineStore } from 'pinia';

export const useAnnouncementStore = defineStore('announcement', () => {
  const state = {
    announcements: [],
  };

  const actions = {
    addAnnouncement(announcement) {
      state.announcements.push(announcement);
    },

    getAvailableSpots(announcementId) {
      const announcement = state.announcements.find(
        (announcement) => announcement.id === announcementId
      );

      return announcement ? announcement.availableSpots : 0;
    },

    reserveSpot(announcementId) {
      const announcement = state.announcements.find(
        (announcement) => announcement.id === announcementId
      );

      if (announcement && announcement.availableSpots > 0) {
        announcement.availableSpots -= 1;
      }
    }
  };

  return { state, ...actions };
});

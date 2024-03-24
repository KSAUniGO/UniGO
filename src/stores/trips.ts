import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Trip {
  id: string
  startsAt: Date
}

export const useTripsStore = defineStore('trips', () => {
  const upcomingTrips = ref<Trip[]>([])

  const nextTrip = computed<Trip | undefined>(() => {
    if (upcomingTrips.value.length <= 0) return undefined
    return upcomingTrips.value[upcomingTrips.value.length - 1]
  })

  return { upcomingTrips, nextTrip }
})

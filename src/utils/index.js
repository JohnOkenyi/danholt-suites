export function createPageUrl(pageName) {
  const pageMap = {
    Home: '/',
    Booking: '/booking',
    Contact: '/contact',
    Facilities: '/facilities',
    FacilityBooking: '/facility-booking',
    FacilityDetail: '/facility-detail',
    PreOrder: '/pre-order',
    Restaurant: '/restaurant',
    RoomDetail: '/room-detail',
    Rooms: '/rooms',
    TableReservation: '/table-reservation',
  }
  return pageMap[pageName] || '/'
}

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDoctor = /* GraphQL */ `
  query GetDoctor($id: ID!) {
    getDoctor(id: $id) {
      id
      companyID
      lastName
      firstName
      experience
      email
      title
      specialty
      insurance
      education
      languages
      appointments {
        items {
          id
          doctorId
          appointmentId
          doctor {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          appointment {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      doctorInfo
      timeOffs {
        items {
          id
          doctorId
          timeOffId
          doctor {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          timeOff {
            id
            type
            timeSpan
            startDate
            startTime
            endDate
            endTime
            companyID
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      isSameHours
      openingHours {
        items {
          id
          doctorId
          openingHoursId
          doctor {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          openingHours {
            id
            day
            isActive
            times
            companyID
            appointments {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          doctorId
          roomId
          doctor {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          room {
            id
            name
            number
            information
            doctors {
              nextToken
              __typename
            }
            appointments {
              nextToken
              __typename
            }
            companyID
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDoctors = /* GraphQL */ `
  query ListDoctors(
    $filter: ModelDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyID
        lastName
        firstName
        experience
        email
        title
        specialty
        insurance
        education
        languages
        appointments {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctorInfo
        timeOffs {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        openingHours {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rooms {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const doctorsByCompanyID = /* GraphQL */ `
  query DoctorsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    doctorsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        lastName
        firstName
        experience
        email
        title
        specialty
        insurance
        education
        languages
        appointments {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctorInfo
        timeOffs {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        openingHours {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rooms {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      name
      number
      information
      doctors {
        items {
          id
          doctorId
          roomId
          doctor {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          room {
            id
            name
            number
            information
            doctors {
              nextToken
              __typename
            }
            appointments {
              nextToken
              __typename
            }
            companyID
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      appointments {
        items {
          id
          roomId
          appointmentId
          room {
            id
            name
            number
            information
            doctors {
              nextToken
              __typename
            }
            appointments {
              nextToken
              __typename
            }
            companyID
            createdAt
            updatedAt
            __typename
          }
          appointment {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      companyID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        information
        doctors {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appointments {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        companyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const roomsByCompanyID = /* GraphQL */ `
  query RoomsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roomsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        number
        information
        doctors {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appointments {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        companyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      name
      booker
      insurance
      privateDuration
      governmentalDuration
      OpeningHours {
        items {
          id
          appointmentId
          openingHoursId
          appointment {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          openingHours {
            id
            day
            isActive
            times
            companyID
            appointments {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      isSameHours
      minBookTime
      maxBookTime
      recallTime
      sendNotification
      type
      directory
      items
      companyID
      rooms {
        items {
          id
          roomId
          appointmentId
          room {
            id
            name
            number
            information
            doctors {
              nextToken
              __typename
            }
            appointments {
              nextToken
              __typename
            }
            companyID
            createdAt
            updatedAt
            __typename
          }
          appointment {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      doctors {
        items {
          id
          doctorId
          appointmentId
          doctor {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          appointment {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        booker
        insurance
        privateDuration
        governmentalDuration
        OpeningHours {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        minBookTime
        maxBookTime
        recallTime
        sendNotification
        type
        directory
        items
        companyID
        rooms {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const appointmentsByCompanyID = /* GraphQL */ `
  query AppointmentsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        booker
        insurance
        privateDuration
        governmentalDuration
        OpeningHours {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        minBookTime
        maxBookTime
        recallTime
        sendNotification
        type
        directory
        items
        companyID
        rooms {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTimeOff = /* GraphQL */ `
  query GetTimeOff($id: ID!) {
    getTimeOff(id: $id) {
      id
      type
      timeSpan
      startDate
      startTime
      endDate
      endTime
      companyID
      doctors {
        items {
          id
          doctorId
          timeOffId
          doctor {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          timeOff {
            id
            type
            timeSpan
            startDate
            startTime
            endDate
            endTime
            companyID
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTimeOffs = /* GraphQL */ `
  query ListTimeOffs(
    $filter: ModelTimeOffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeOffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        timeSpan
        startDate
        startTime
        endDate
        endTime
        companyID
        doctors {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const timeOffsByCompanyID = /* GraphQL */ `
  query TimeOffsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTimeOffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    timeOffsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        timeSpan
        startDate
        startTime
        endDate
        endTime
        companyID
        doctors {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOpeningHours = /* GraphQL */ `
  query GetOpeningHours($id: ID!) {
    getOpeningHours(id: $id) {
      id
      day
      isActive
      times
      companyID
      appointments {
        items {
          id
          appointmentId
          openingHoursId
          appointment {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          openingHours {
            id
            day
            isActive
            times
            companyID
            appointments {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      doctors {
        items {
          id
          doctorId
          openingHoursId
          doctor {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          openingHours {
            id
            day
            isActive
            times
            companyID
            appointments {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOpeningHours = /* GraphQL */ `
  query ListOpeningHours(
    $filter: ModelOpeningHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpeningHours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        day
        isActive
        times
        companyID
        appointments {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const openingHoursByCompanyID = /* GraphQL */ `
  query OpeningHoursByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOpeningHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    openingHoursByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        day
        isActive
        times
        companyID
        appointments {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCallHours = /* GraphQL */ `
  query GetCallHours($id: ID!) {
    getCallHours(id: $id) {
      id
      Monday
      Tuesday
      Wednesday
      Thursday
      Friday
      Saturday
      Sunday
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCallHours = /* GraphQL */ `
  query ListCallHours(
    $filter: ModelCallHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCallHours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      ClientCustomers {
        id
        companyID
        lastName
        firstName
        email
        phone
        emergencyContact
        birthdate
        houseNo
        street
        postalCode
        city
        country
        comment
        image
        createdAt
        updatedAt
        companyClientCustomersId
        __typename
      }
      status
      nrOfTries
      lastTried
      CampaignHeader {
        id
        ClientAccounts {
          id
          companyID
          houseNo
          street
          postalCode
          city
          country
          image
          Calls {
            items {
              id
              clientID
              createdAt
              updatedAt
              clientAccountsCallsId
              __typename
            }
            nextToken
            __typename
          }
          OneTimePasswords {
            items {
              id
              clientID
              otp
              ipAddr
              expiry
              createdAt
              updatedAt
              clientAccountsOneTimePasswordsId
              __typename
            }
            nextToken
            __typename
          }
          dateInvited
          createdAt
          updatedAt
          __typename
        }
        Agent {
          id
          company {
            id
            name
            email
            phone
            link
            street
            houseNo
            postalCode
            city
            country
            aboutUs
            image
            lastPaid
            ClientCustomers {
              nextToken
              __typename
            }
            ClientAccounts {
              nextToken
              __typename
            }
            CompanyPayments {
              nextToken
              __typename
            }
            WeeklyHours {
              nextToken
              __typename
            }
            Appointments {
              nextToken
              __typename
            }
            Hints {
              nextToken
              __typename
            }
            Rooms {
              nextToken
              __typename
            }
            Doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          name
          language
          phoneNrAssigned
          createdAt
          updatedAt
          agentCompanyId
          __typename
        }
        CallHours {
          id
          Monday
          Tuesday
          Wednesday
          Thursday
          Friday
          Saturday
          Sunday
          createdAt
          updatedAt
          __typename
        }
        startAt
        durationWaitTillNextTry
        maxNrOfTries
        createdAt
        updatedAt
        campaignHeaderClientAccountsId
        campaignHeaderAgentId
        campaignHeaderCallHoursId
        __typename
      }
      createdAt
      updatedAt
      campaignClientCustomersId
      campaignCampaignHeaderId
      __typename
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ClientCustomers {
          id
          companyID
          lastName
          firstName
          email
          phone
          emergencyContact
          birthdate
          houseNo
          street
          postalCode
          city
          country
          comment
          image
          createdAt
          updatedAt
          companyClientCustomersId
          __typename
        }
        status
        nrOfTries
        lastTried
        CampaignHeader {
          id
          ClientAccounts {
            id
            companyID
            houseNo
            street
            postalCode
            city
            country
            image
            Calls {
              nextToken
              __typename
            }
            OneTimePasswords {
              nextToken
              __typename
            }
            dateInvited
            createdAt
            updatedAt
            __typename
          }
          Agent {
            id
            company {
              id
              name
              email
              phone
              link
              street
              houseNo
              postalCode
              city
              country
              aboutUs
              image
              lastPaid
              createdAt
              updatedAt
              __typename
            }
            name
            language
            phoneNrAssigned
            createdAt
            updatedAt
            agentCompanyId
            __typename
          }
          CallHours {
            id
            Monday
            Tuesday
            Wednesday
            Thursday
            Friday
            Saturday
            Sunday
            createdAt
            updatedAt
            __typename
          }
          startAt
          durationWaitTillNextTry
          maxNrOfTries
          createdAt
          updatedAt
          campaignHeaderClientAccountsId
          campaignHeaderAgentId
          campaignHeaderCallHoursId
          __typename
        }
        createdAt
        updatedAt
        campaignClientCustomersId
        campaignCampaignHeaderId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAgent = /* GraphQL */ `
  query GetAgent($id: ID!) {
    getAgent(id: $id) {
      id
      company {
        id
        name
        email
        phone
        link
        street
        houseNo
        postalCode
        city
        country
        aboutUs
        image
        lastPaid
        ClientCustomers {
          items {
            id
            companyID
            lastName
            firstName
            email
            phone
            emergencyContact
            birthdate
            houseNo
            street
            postalCode
            city
            country
            comment
            image
            createdAt
            updatedAt
            companyClientCustomersId
            __typename
          }
          nextToken
          __typename
        }
        ClientAccounts {
          items {
            id
            companyID
            houseNo
            street
            postalCode
            city
            country
            image
            Calls {
              nextToken
              __typename
            }
            OneTimePasswords {
              nextToken
              __typename
            }
            dateInvited
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        CompanyPayments {
          items {
            id
            companyID
            type
            amount
            referenceID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        WeeklyHours {
          items {
            id
            day
            isActive
            times
            companyID
            appointments {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Appointments {
          items {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Hints {
          items {
            id
            status
            insurance
            message
            companyID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Rooms {
          items {
            id
            name
            number
            information
            doctors {
              nextToken
              __typename
            }
            appointments {
              nextToken
              __typename
            }
            companyID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Doctors {
          items {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      name
      language
      phoneNrAssigned
      createdAt
      updatedAt
      agentCompanyId
      __typename
    }
  }
`;
export const listAgents = /* GraphQL */ `
  query ListAgents(
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        company {
          id
          name
          email
          phone
          link
          street
          houseNo
          postalCode
          city
          country
          aboutUs
          image
          lastPaid
          ClientCustomers {
            items {
              id
              companyID
              lastName
              firstName
              email
              phone
              emergencyContact
              birthdate
              houseNo
              street
              postalCode
              city
              country
              comment
              image
              createdAt
              updatedAt
              companyClientCustomersId
              __typename
            }
            nextToken
            __typename
          }
          ClientAccounts {
            items {
              id
              companyID
              houseNo
              street
              postalCode
              city
              country
              image
              dateInvited
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          CompanyPayments {
            items {
              id
              companyID
              type
              amount
              referenceID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          WeeklyHours {
            items {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Appointments {
            items {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Hints {
            items {
              id
              status
              insurance
              message
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Rooms {
            items {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Doctors {
            items {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        name
        language
        phoneNrAssigned
        createdAt
        updatedAt
        agentCompanyId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHints = /* GraphQL */ `
  query GetHints($id: ID!) {
    getHints(id: $id) {
      id
      status
      insurance
      message
      companyID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHints = /* GraphQL */ `
  query ListHints(
    $filter: ModelHintsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        insurance
        message
        companyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const hintsByCompanyID = /* GraphQL */ `
  query HintsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHintsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hintsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        insurance
        message
        companyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCampaignHeader = /* GraphQL */ `
  query GetCampaignHeader($id: ID!) {
    getCampaignHeader(id: $id) {
      id
      ClientAccounts {
        id
        companyID
        houseNo
        street
        postalCode
        city
        country
        image
        Calls {
          items {
            id
            clientID
            createdAt
            updatedAt
            clientAccountsCallsId
            __typename
          }
          nextToken
          __typename
        }
        OneTimePasswords {
          items {
            id
            clientID
            otp
            ipAddr
            expiry
            createdAt
            updatedAt
            clientAccountsOneTimePasswordsId
            __typename
          }
          nextToken
          __typename
        }
        dateInvited
        createdAt
        updatedAt
        __typename
      }
      Agent {
        id
        company {
          id
          name
          email
          phone
          link
          street
          houseNo
          postalCode
          city
          country
          aboutUs
          image
          lastPaid
          ClientCustomers {
            items {
              id
              companyID
              lastName
              firstName
              email
              phone
              emergencyContact
              birthdate
              houseNo
              street
              postalCode
              city
              country
              comment
              image
              createdAt
              updatedAt
              companyClientCustomersId
              __typename
            }
            nextToken
            __typename
          }
          ClientAccounts {
            items {
              id
              companyID
              houseNo
              street
              postalCode
              city
              country
              image
              dateInvited
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          CompanyPayments {
            items {
              id
              companyID
              type
              amount
              referenceID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          WeeklyHours {
            items {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Appointments {
            items {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Hints {
            items {
              id
              status
              insurance
              message
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Rooms {
            items {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Doctors {
            items {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        name
        language
        phoneNrAssigned
        createdAt
        updatedAt
        agentCompanyId
        __typename
      }
      CallHours {
        id
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
        createdAt
        updatedAt
        __typename
      }
      startAt
      durationWaitTillNextTry
      maxNrOfTries
      createdAt
      updatedAt
      campaignHeaderClientAccountsId
      campaignHeaderAgentId
      campaignHeaderCallHoursId
      __typename
    }
  }
`;
export const listCampaignHeaders = /* GraphQL */ `
  query ListCampaignHeaders(
    $filter: ModelCampaignHeaderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaignHeaders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ClientAccounts {
          id
          companyID
          houseNo
          street
          postalCode
          city
          country
          image
          Calls {
            items {
              id
              clientID
              createdAt
              updatedAt
              clientAccountsCallsId
              __typename
            }
            nextToken
            __typename
          }
          OneTimePasswords {
            items {
              id
              clientID
              otp
              ipAddr
              expiry
              createdAt
              updatedAt
              clientAccountsOneTimePasswordsId
              __typename
            }
            nextToken
            __typename
          }
          dateInvited
          createdAt
          updatedAt
          __typename
        }
        Agent {
          id
          company {
            id
            name
            email
            phone
            link
            street
            houseNo
            postalCode
            city
            country
            aboutUs
            image
            lastPaid
            ClientCustomers {
              nextToken
              __typename
            }
            ClientAccounts {
              nextToken
              __typename
            }
            CompanyPayments {
              nextToken
              __typename
            }
            WeeklyHours {
              nextToken
              __typename
            }
            Appointments {
              nextToken
              __typename
            }
            Hints {
              nextToken
              __typename
            }
            Rooms {
              nextToken
              __typename
            }
            Doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          name
          language
          phoneNrAssigned
          createdAt
          updatedAt
          agentCompanyId
          __typename
        }
        CallHours {
          id
          Monday
          Tuesday
          Wednesday
          Thursday
          Friday
          Saturday
          Sunday
          createdAt
          updatedAt
          __typename
        }
        startAt
        durationWaitTillNextTry
        maxNrOfTries
        createdAt
        updatedAt
        campaignHeaderClientAccountsId
        campaignHeaderAgentId
        campaignHeaderCallHoursId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClientCustomers = /* GraphQL */ `
  query GetClientCustomers($id: ID!) {
    getClientCustomers(id: $id) {
      id
      companyID
      lastName
      firstName
      email
      phone
      emergencyContact
      birthdate
      houseNo
      street
      postalCode
      city
      country
      comment
      image
      createdAt
      updatedAt
      companyClientCustomersId
      __typename
    }
  }
`;
export const listClientCustomers = /* GraphQL */ `
  query ListClientCustomers(
    $filter: ModelClientCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyID
        lastName
        firstName
        email
        phone
        emergencyContact
        birthdate
        houseNo
        street
        postalCode
        city
        country
        comment
        image
        createdAt
        updatedAt
        companyClientCustomersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const clientCustomersByCompanyID = /* GraphQL */ `
  query ClientCustomersByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClientCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientCustomersByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        lastName
        firstName
        email
        phone
        emergencyContact
        birthdate
        houseNo
        street
        postalCode
        city
        country
        comment
        image
        createdAt
        updatedAt
        companyClientCustomersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCalls = /* GraphQL */ `
  query GetCalls($id: ID!) {
    getCalls(id: $id) {
      id
      clientID
      createdAt
      updatedAt
      clientAccountsCallsId
      __typename
    }
  }
`;
export const listCalls = /* GraphQL */ `
  query ListCalls(
    $filter: ModelCallsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientID
        createdAt
        updatedAt
        clientAccountsCallsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const callsByClientID = /* GraphQL */ `
  query CallsByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCallsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    callsByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clientID
        createdAt
        updatedAt
        clientAccountsCallsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCallOutbound = /* GraphQL */ `
  query GetCallOutbound($id: ID!) {
    getCallOutbound(id: $id) {
      id
      ClientCustomers {
        id
        companyID
        lastName
        firstName
        email
        phone
        emergencyContact
        birthdate
        houseNo
        street
        postalCode
        city
        country
        comment
        image
        createdAt
        updatedAt
        companyClientCustomersId
        __typename
      }
      Campaign {
        id
        ClientCustomers {
          id
          companyID
          lastName
          firstName
          email
          phone
          emergencyContact
          birthdate
          houseNo
          street
          postalCode
          city
          country
          comment
          image
          createdAt
          updatedAt
          companyClientCustomersId
          __typename
        }
        status
        nrOfTries
        lastTried
        CampaignHeader {
          id
          ClientAccounts {
            id
            companyID
            houseNo
            street
            postalCode
            city
            country
            image
            Calls {
              nextToken
              __typename
            }
            OneTimePasswords {
              nextToken
              __typename
            }
            dateInvited
            createdAt
            updatedAt
            __typename
          }
          Agent {
            id
            company {
              id
              name
              email
              phone
              link
              street
              houseNo
              postalCode
              city
              country
              aboutUs
              image
              lastPaid
              createdAt
              updatedAt
              __typename
            }
            name
            language
            phoneNrAssigned
            createdAt
            updatedAt
            agentCompanyId
            __typename
          }
          CallHours {
            id
            Monday
            Tuesday
            Wednesday
            Thursday
            Friday
            Saturday
            Sunday
            createdAt
            updatedAt
            __typename
          }
          startAt
          durationWaitTillNextTry
          maxNrOfTries
          createdAt
          updatedAt
          campaignHeaderClientAccountsId
          campaignHeaderAgentId
          campaignHeaderCallHoursId
          __typename
        }
        createdAt
        updatedAt
        campaignClientCustomersId
        campaignCampaignHeaderId
        __typename
      }
      createdAt
      updatedAt
      callOutboundClientCustomersId
      callOutboundCampaignId
      __typename
    }
  }
`;
export const listCallOutbounds = /* GraphQL */ `
  query ListCallOutbounds(
    $filter: ModelCallOutboundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCallOutbounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ClientCustomers {
          id
          companyID
          lastName
          firstName
          email
          phone
          emergencyContact
          birthdate
          houseNo
          street
          postalCode
          city
          country
          comment
          image
          createdAt
          updatedAt
          companyClientCustomersId
          __typename
        }
        Campaign {
          id
          ClientCustomers {
            id
            companyID
            lastName
            firstName
            email
            phone
            emergencyContact
            birthdate
            houseNo
            street
            postalCode
            city
            country
            comment
            image
            createdAt
            updatedAt
            companyClientCustomersId
            __typename
          }
          status
          nrOfTries
          lastTried
          CampaignHeader {
            id
            ClientAccounts {
              id
              companyID
              houseNo
              street
              postalCode
              city
              country
              image
              dateInvited
              createdAt
              updatedAt
              __typename
            }
            Agent {
              id
              name
              language
              phoneNrAssigned
              createdAt
              updatedAt
              agentCompanyId
              __typename
            }
            CallHours {
              id
              Monday
              Tuesday
              Wednesday
              Thursday
              Friday
              Saturday
              Sunday
              createdAt
              updatedAt
              __typename
            }
            startAt
            durationWaitTillNextTry
            maxNrOfTries
            createdAt
            updatedAt
            campaignHeaderClientAccountsId
            campaignHeaderAgentId
            campaignHeaderCallHoursId
            __typename
          }
          createdAt
          updatedAt
          campaignClientCustomersId
          campaignCampaignHeaderId
          __typename
        }
        createdAt
        updatedAt
        callOutboundClientCustomersId
        callOutboundCampaignId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCallInbound = /* GraphQL */ `
  query GetCallInbound($id: ID!) {
    getCallInbound(id: $id) {
      id
      callerNo
      clientNo
      duration
      Agent {
        id
        company {
          id
          name
          email
          phone
          link
          street
          houseNo
          postalCode
          city
          country
          aboutUs
          image
          lastPaid
          ClientCustomers {
            items {
              id
              companyID
              lastName
              firstName
              email
              phone
              emergencyContact
              birthdate
              houseNo
              street
              postalCode
              city
              country
              comment
              image
              createdAt
              updatedAt
              companyClientCustomersId
              __typename
            }
            nextToken
            __typename
          }
          ClientAccounts {
            items {
              id
              companyID
              houseNo
              street
              postalCode
              city
              country
              image
              dateInvited
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          CompanyPayments {
            items {
              id
              companyID
              type
              amount
              referenceID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          WeeklyHours {
            items {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Appointments {
            items {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Hints {
            items {
              id
              status
              insurance
              message
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Rooms {
            items {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Doctors {
            items {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        name
        language
        phoneNrAssigned
        createdAt
        updatedAt
        agentCompanyId
        __typename
      }
      startDT
      endDT
      createdAt
      updatedAt
      callInboundAgentId
      __typename
    }
  }
`;
export const listCallInbounds = /* GraphQL */ `
  query ListCallInbounds(
    $filter: ModelCallInboundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCallInbounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        callerNo
        clientNo
        duration
        Agent {
          id
          company {
            id
            name
            email
            phone
            link
            street
            houseNo
            postalCode
            city
            country
            aboutUs
            image
            lastPaid
            ClientCustomers {
              nextToken
              __typename
            }
            ClientAccounts {
              nextToken
              __typename
            }
            CompanyPayments {
              nextToken
              __typename
            }
            WeeklyHours {
              nextToken
              __typename
            }
            Appointments {
              nextToken
              __typename
            }
            Hints {
              nextToken
              __typename
            }
            Rooms {
              nextToken
              __typename
            }
            Doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          name
          language
          phoneNrAssigned
          createdAt
          updatedAt
          agentCompanyId
          __typename
        }
        startDT
        endDT
        createdAt
        updatedAt
        callInboundAgentId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClientAccounts = /* GraphQL */ `
  query GetClientAccounts($id: ID!) {
    getClientAccounts(id: $id) {
      id
      companyID
      houseNo
      street
      postalCode
      city
      country
      image
      Calls {
        items {
          id
          clientID
          createdAt
          updatedAt
          clientAccountsCallsId
          __typename
        }
        nextToken
        __typename
      }
      OneTimePasswords {
        items {
          id
          clientID
          otp
          ipAddr
          expiry
          createdAt
          updatedAt
          clientAccountsOneTimePasswordsId
          __typename
        }
        nextToken
        __typename
      }
      dateInvited
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClientAccounts = /* GraphQL */ `
  query ListClientAccounts(
    $filter: ModelClientAccountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyID
        houseNo
        street
        postalCode
        city
        country
        image
        Calls {
          items {
            id
            clientID
            createdAt
            updatedAt
            clientAccountsCallsId
            __typename
          }
          nextToken
          __typename
        }
        OneTimePasswords {
          items {
            id
            clientID
            otp
            ipAddr
            expiry
            createdAt
            updatedAt
            clientAccountsOneTimePasswordsId
            __typename
          }
          nextToken
          __typename
        }
        dateInvited
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const clientAccountsByCompanyID = /* GraphQL */ `
  query ClientAccountsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClientAccountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientAccountsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        houseNo
        street
        postalCode
        city
        country
        image
        Calls {
          items {
            id
            clientID
            createdAt
            updatedAt
            clientAccountsCallsId
            __typename
          }
          nextToken
          __typename
        }
        OneTimePasswords {
          items {
            id
            clientID
            otp
            ipAddr
            expiry
            createdAt
            updatedAt
            clientAccountsOneTimePasswordsId
            __typename
          }
          nextToken
          __typename
        }
        dateInvited
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      email
      phone
      link
      street
      houseNo
      postalCode
      city
      country
      aboutUs
      image
      lastPaid
      ClientCustomers {
        items {
          id
          companyID
          lastName
          firstName
          email
          phone
          emergencyContact
          birthdate
          houseNo
          street
          postalCode
          city
          country
          comment
          image
          createdAt
          updatedAt
          companyClientCustomersId
          __typename
        }
        nextToken
        __typename
      }
      ClientAccounts {
        items {
          id
          companyID
          houseNo
          street
          postalCode
          city
          country
          image
          Calls {
            items {
              id
              clientID
              createdAt
              updatedAt
              clientAccountsCallsId
              __typename
            }
            nextToken
            __typename
          }
          OneTimePasswords {
            items {
              id
              clientID
              otp
              ipAddr
              expiry
              createdAt
              updatedAt
              clientAccountsOneTimePasswordsId
              __typename
            }
            nextToken
            __typename
          }
          dateInvited
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CompanyPayments {
        items {
          id
          companyID
          type
          amount
          referenceID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      WeeklyHours {
        items {
          id
          day
          isActive
          times
          companyID
          appointments {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Appointments {
        items {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Hints {
        items {
          id
          status
          insurance
          message
          companyID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Rooms {
        items {
          id
          name
          number
          information
          doctors {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          appointments {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          companyID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Doctors {
        items {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        link
        street
        houseNo
        postalCode
        city
        country
        aboutUs
        image
        lastPaid
        ClientCustomers {
          items {
            id
            companyID
            lastName
            firstName
            email
            phone
            emergencyContact
            birthdate
            houseNo
            street
            postalCode
            city
            country
            comment
            image
            createdAt
            updatedAt
            companyClientCustomersId
            __typename
          }
          nextToken
          __typename
        }
        ClientAccounts {
          items {
            id
            companyID
            houseNo
            street
            postalCode
            city
            country
            image
            Calls {
              nextToken
              __typename
            }
            OneTimePasswords {
              nextToken
              __typename
            }
            dateInvited
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        CompanyPayments {
          items {
            id
            companyID
            type
            amount
            referenceID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        WeeklyHours {
          items {
            id
            day
            isActive
            times
            companyID
            appointments {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Appointments {
          items {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Hints {
          items {
            id
            status
            insurance
            message
            companyID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Rooms {
          items {
            id
            name
            number
            information
            doctors {
              nextToken
              __typename
            }
            appointments {
              nextToken
              __typename
            }
            companyID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Doctors {
          items {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCompanyPayments = /* GraphQL */ `
  query GetCompanyPayments($id: ID!) {
    getCompanyPayments(id: $id) {
      id
      companyID
      type
      amount
      referenceID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCompanyPayments = /* GraphQL */ `
  query ListCompanyPayments(
    $filter: ModelCompanyPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyID
        type
        amount
        referenceID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const companyPaymentsByCompanyID = /* GraphQL */ `
  query CompanyPaymentsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyPaymentsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyID
        type
        amount
        referenceID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubscriptions = /* GraphQL */ `
  query GetSubscriptions($id: ID!) {
    getSubscriptions(id: $id) {
      id
      startedCall
      minuteCalls
      extraCallCost
      monthlyCost
      yearlyCost
      monthlyYearlySalePercent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubscriptions = /* GraphQL */ `
  query ListSubscriptions(
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startedCall
        minuteCalls
        extraCallCost
        monthlyCost
        yearlyCost
        monthlyYearlySalePercent
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTelemetry = /* GraphQL */ `
  query GetTelemetry($id: ID!) {
    getTelemetry(id: $id) {
      id
      Company {
        id
        name
        email
        phone
        link
        street
        houseNo
        postalCode
        city
        country
        aboutUs
        image
        lastPaid
        ClientCustomers {
          items {
            id
            companyID
            lastName
            firstName
            email
            phone
            emergencyContact
            birthdate
            houseNo
            street
            postalCode
            city
            country
            comment
            image
            createdAt
            updatedAt
            companyClientCustomersId
            __typename
          }
          nextToken
          __typename
        }
        ClientAccounts {
          items {
            id
            companyID
            houseNo
            street
            postalCode
            city
            country
            image
            Calls {
              nextToken
              __typename
            }
            OneTimePasswords {
              nextToken
              __typename
            }
            dateInvited
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        CompanyPayments {
          items {
            id
            companyID
            type
            amount
            referenceID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        WeeklyHours {
          items {
            id
            day
            isActive
            times
            companyID
            appointments {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Appointments {
          items {
            id
            name
            booker
            insurance
            privateDuration
            governmentalDuration
            OpeningHours {
              nextToken
              __typename
            }
            isSameHours
            minBookTime
            maxBookTime
            recallTime
            sendNotification
            type
            directory
            items
            companyID
            rooms {
              nextToken
              __typename
            }
            doctors {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Hints {
          items {
            id
            status
            insurance
            message
            companyID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Rooms {
          items {
            id
            name
            number
            information
            doctors {
              nextToken
              __typename
            }
            appointments {
              nextToken
              __typename
            }
            companyID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Doctors {
          items {
            id
            companyID
            lastName
            firstName
            experience
            email
            title
            specialty
            insurance
            education
            languages
            appointments {
              nextToken
              __typename
            }
            doctorInfo
            timeOffs {
              nextToken
              __typename
            }
            isSameHours
            openingHours {
              nextToken
              __typename
            }
            rooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      Subscriptions {
        id
        startedCall
        minuteCalls
        extraCallCost
        monthlyCost
        yearlyCost
        monthlyYearlySalePercent
        createdAt
        updatedAt
        __typename
      }
      ClientAccounts {
        id
        companyID
        houseNo
        street
        postalCode
        city
        country
        image
        Calls {
          items {
            id
            clientID
            createdAt
            updatedAt
            clientAccountsCallsId
            __typename
          }
          nextToken
          __typename
        }
        OneTimePasswords {
          items {
            id
            clientID
            otp
            ipAddr
            expiry
            createdAt
            updatedAt
            clientAccountsOneTimePasswordsId
            __typename
          }
          nextToken
          __typename
        }
        dateInvited
        createdAt
        updatedAt
        __typename
      }
      Campaign {
        id
        ClientCustomers {
          id
          companyID
          lastName
          firstName
          email
          phone
          emergencyContact
          birthdate
          houseNo
          street
          postalCode
          city
          country
          comment
          image
          createdAt
          updatedAt
          companyClientCustomersId
          __typename
        }
        status
        nrOfTries
        lastTried
        CampaignHeader {
          id
          ClientAccounts {
            id
            companyID
            houseNo
            street
            postalCode
            city
            country
            image
            Calls {
              nextToken
              __typename
            }
            OneTimePasswords {
              nextToken
              __typename
            }
            dateInvited
            createdAt
            updatedAt
            __typename
          }
          Agent {
            id
            company {
              id
              name
              email
              phone
              link
              street
              houseNo
              postalCode
              city
              country
              aboutUs
              image
              lastPaid
              createdAt
              updatedAt
              __typename
            }
            name
            language
            phoneNrAssigned
            createdAt
            updatedAt
            agentCompanyId
            __typename
          }
          CallHours {
            id
            Monday
            Tuesday
            Wednesday
            Thursday
            Friday
            Saturday
            Sunday
            createdAt
            updatedAt
            __typename
          }
          startAt
          durationWaitTillNextTry
          maxNrOfTries
          createdAt
          updatedAt
          campaignHeaderClientAccountsId
          campaignHeaderAgentId
          campaignHeaderCallHoursId
          __typename
        }
        createdAt
        updatedAt
        campaignClientCustomersId
        campaignCampaignHeaderId
        __typename
      }
      month
      startedMins
      startedCalls
      createdAt
      updatedAt
      telemetryCompanyId
      telemetrySubscriptionsId
      telemetryClientAccountsId
      telemetryCampaignId
      __typename
    }
  }
`;
export const listTelemetries = /* GraphQL */ `
  query ListTelemetries(
    $filter: ModelTelemetryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTelemetries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Company {
          id
          name
          email
          phone
          link
          street
          houseNo
          postalCode
          city
          country
          aboutUs
          image
          lastPaid
          ClientCustomers {
            items {
              id
              companyID
              lastName
              firstName
              email
              phone
              emergencyContact
              birthdate
              houseNo
              street
              postalCode
              city
              country
              comment
              image
              createdAt
              updatedAt
              companyClientCustomersId
              __typename
            }
            nextToken
            __typename
          }
          ClientAccounts {
            items {
              id
              companyID
              houseNo
              street
              postalCode
              city
              country
              image
              dateInvited
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          CompanyPayments {
            items {
              id
              companyID
              type
              amount
              referenceID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          WeeklyHours {
            items {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Appointments {
            items {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Hints {
            items {
              id
              status
              insurance
              message
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Rooms {
            items {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Doctors {
            items {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        Subscriptions {
          id
          startedCall
          minuteCalls
          extraCallCost
          monthlyCost
          yearlyCost
          monthlyYearlySalePercent
          createdAt
          updatedAt
          __typename
        }
        ClientAccounts {
          id
          companyID
          houseNo
          street
          postalCode
          city
          country
          image
          Calls {
            items {
              id
              clientID
              createdAt
              updatedAt
              clientAccountsCallsId
              __typename
            }
            nextToken
            __typename
          }
          OneTimePasswords {
            items {
              id
              clientID
              otp
              ipAddr
              expiry
              createdAt
              updatedAt
              clientAccountsOneTimePasswordsId
              __typename
            }
            nextToken
            __typename
          }
          dateInvited
          createdAt
          updatedAt
          __typename
        }
        Campaign {
          id
          ClientCustomers {
            id
            companyID
            lastName
            firstName
            email
            phone
            emergencyContact
            birthdate
            houseNo
            street
            postalCode
            city
            country
            comment
            image
            createdAt
            updatedAt
            companyClientCustomersId
            __typename
          }
          status
          nrOfTries
          lastTried
          CampaignHeader {
            id
            ClientAccounts {
              id
              companyID
              houseNo
              street
              postalCode
              city
              country
              image
              dateInvited
              createdAt
              updatedAt
              __typename
            }
            Agent {
              id
              name
              language
              phoneNrAssigned
              createdAt
              updatedAt
              agentCompanyId
              __typename
            }
            CallHours {
              id
              Monday
              Tuesday
              Wednesday
              Thursday
              Friday
              Saturday
              Sunday
              createdAt
              updatedAt
              __typename
            }
            startAt
            durationWaitTillNextTry
            maxNrOfTries
            createdAt
            updatedAt
            campaignHeaderClientAccountsId
            campaignHeaderAgentId
            campaignHeaderCallHoursId
            __typename
          }
          createdAt
          updatedAt
          campaignClientCustomersId
          campaignCampaignHeaderId
          __typename
        }
        month
        startedMins
        startedCalls
        createdAt
        updatedAt
        telemetryCompanyId
        telemetrySubscriptionsId
        telemetryClientAccountsId
        telemetryCampaignId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTargetGroupHeader = /* GraphQL */ `
  query GetTargetGroupHeader($id: ID!) {
    getTargetGroupHeader(id: $id) {
      id
      ClientAccounts {
        id
        companyID
        houseNo
        street
        postalCode
        city
        country
        image
        Calls {
          items {
            id
            clientID
            createdAt
            updatedAt
            clientAccountsCallsId
            __typename
          }
          nextToken
          __typename
        }
        OneTimePasswords {
          items {
            id
            clientID
            otp
            ipAddr
            expiry
            createdAt
            updatedAt
            clientAccountsOneTimePasswordsId
            __typename
          }
          nextToken
          __typename
        }
        dateInvited
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      targetGroupHeaderClientAccountsId
      __typename
    }
  }
`;
export const listTargetGroupHeaders = /* GraphQL */ `
  query ListTargetGroupHeaders(
    $filter: ModelTargetGroupHeaderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTargetGroupHeaders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ClientAccounts {
          id
          companyID
          houseNo
          street
          postalCode
          city
          country
          image
          Calls {
            items {
              id
              clientID
              createdAt
              updatedAt
              clientAccountsCallsId
              __typename
            }
            nextToken
            __typename
          }
          OneTimePasswords {
            items {
              id
              clientID
              otp
              ipAddr
              expiry
              createdAt
              updatedAt
              clientAccountsOneTimePasswordsId
              __typename
            }
            nextToken
            __typename
          }
          dateInvited
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        targetGroupHeaderClientAccountsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTargetGroup = /* GraphQL */ `
  query GetTargetGroup($id: ID!) {
    getTargetGroup(id: $id) {
      id
      TargetGroupHeader {
        id
        ClientAccounts {
          id
          companyID
          houseNo
          street
          postalCode
          city
          country
          image
          Calls {
            items {
              id
              clientID
              createdAt
              updatedAt
              clientAccountsCallsId
              __typename
            }
            nextToken
            __typename
          }
          OneTimePasswords {
            items {
              id
              clientID
              otp
              ipAddr
              expiry
              createdAt
              updatedAt
              clientAccountsOneTimePasswordsId
              __typename
            }
            nextToken
            __typename
          }
          dateInvited
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        targetGroupHeaderClientAccountsId
        __typename
      }
      ClientCustomers {
        id
        companyID
        lastName
        firstName
        email
        phone
        emergencyContact
        birthdate
        houseNo
        street
        postalCode
        city
        country
        comment
        image
        createdAt
        updatedAt
        companyClientCustomersId
        __typename
      }
      createdAt
      updatedAt
      targetGroupTargetGroupHeaderId
      targetGroupClientCustomersId
      __typename
    }
  }
`;
export const listTargetGroups = /* GraphQL */ `
  query ListTargetGroups(
    $filter: ModelTargetGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTargetGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        TargetGroupHeader {
          id
          ClientAccounts {
            id
            companyID
            houseNo
            street
            postalCode
            city
            country
            image
            Calls {
              nextToken
              __typename
            }
            OneTimePasswords {
              nextToken
              __typename
            }
            dateInvited
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          targetGroupHeaderClientAccountsId
          __typename
        }
        ClientCustomers {
          id
          companyID
          lastName
          firstName
          email
          phone
          emergencyContact
          birthdate
          houseNo
          street
          postalCode
          city
          country
          comment
          image
          createdAt
          updatedAt
          companyClientCustomersId
          __typename
        }
        createdAt
        updatedAt
        targetGroupTargetGroupHeaderId
        targetGroupClientCustomersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOneTimePasswords = /* GraphQL */ `
  query GetOneTimePasswords($id: ID!) {
    getOneTimePasswords(id: $id) {
      id
      clientID
      otp
      ipAddr
      expiry
      createdAt
      updatedAt
      clientAccountsOneTimePasswordsId
      __typename
    }
  }
`;
export const listOneTimePasswords = /* GraphQL */ `
  query ListOneTimePasswords(
    $filter: ModelOneTimePasswordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOneTimePasswords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clientID
        otp
        ipAddr
        expiry
        createdAt
        updatedAt
        clientAccountsOneTimePasswordsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const oneTimePasswordsByClientID = /* GraphQL */ `
  query OneTimePasswordsByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOneTimePasswordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oneTimePasswordsByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clientID
        otp
        ipAddr
        expiry
        createdAt
        updatedAt
        clientAccountsOneTimePasswordsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAppointmentDoctor = /* GraphQL */ `
  query GetAppointmentDoctor($id: ID!) {
    getAppointmentDoctor(id: $id) {
      id
      doctorId
      appointmentId
      doctor {
        id
        companyID
        lastName
        firstName
        experience
        email
        title
        specialty
        insurance
        education
        languages
        appointments {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctorInfo
        timeOffs {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        openingHours {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rooms {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      appointment {
        id
        name
        booker
        insurance
        privateDuration
        governmentalDuration
        OpeningHours {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        minBookTime
        maxBookTime
        recallTime
        sendNotification
        type
        directory
        items
        companyID
        rooms {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAppointmentDoctors = /* GraphQL */ `
  query ListAppointmentDoctors(
    $filter: ModelAppointmentDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentDoctors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        appointmentId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const appointmentDoctorsByDoctorId = /* GraphQL */ `
  query AppointmentDoctorsByDoctorId(
    $doctorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentDoctorsByDoctorId(
      doctorId: $doctorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        appointmentId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const appointmentDoctorsByAppointmentId = /* GraphQL */ `
  query AppointmentDoctorsByAppointmentId(
    $appointmentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentDoctorsByAppointmentId(
      appointmentId: $appointmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        appointmentId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTimeOffDoctor = /* GraphQL */ `
  query GetTimeOffDoctor($id: ID!) {
    getTimeOffDoctor(id: $id) {
      id
      doctorId
      timeOffId
      doctor {
        id
        companyID
        lastName
        firstName
        experience
        email
        title
        specialty
        insurance
        education
        languages
        appointments {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctorInfo
        timeOffs {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        openingHours {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rooms {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      timeOff {
        id
        type
        timeSpan
        startDate
        startTime
        endDate
        endTime
        companyID
        doctors {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTimeOffDoctors = /* GraphQL */ `
  query ListTimeOffDoctors(
    $filter: ModelTimeOffDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeOffDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        doctorId
        timeOffId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        timeOff {
          id
          type
          timeSpan
          startDate
          startTime
          endDate
          endTime
          companyID
          doctors {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const timeOffDoctorsByDoctorId = /* GraphQL */ `
  query TimeOffDoctorsByDoctorId(
    $doctorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTimeOffDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    timeOffDoctorsByDoctorId(
      doctorId: $doctorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        timeOffId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        timeOff {
          id
          type
          timeSpan
          startDate
          startTime
          endDate
          endTime
          companyID
          doctors {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const timeOffDoctorsByTimeOffId = /* GraphQL */ `
  query TimeOffDoctorsByTimeOffId(
    $timeOffId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTimeOffDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    timeOffDoctorsByTimeOffId(
      timeOffId: $timeOffId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        timeOffId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        timeOff {
          id
          type
          timeSpan
          startDate
          startTime
          endDate
          endTime
          companyID
          doctors {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDoctorHours = /* GraphQL */ `
  query GetDoctorHours($id: ID!) {
    getDoctorHours(id: $id) {
      id
      doctorId
      openingHoursId
      doctor {
        id
        companyID
        lastName
        firstName
        experience
        email
        title
        specialty
        insurance
        education
        languages
        appointments {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctorInfo
        timeOffs {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        openingHours {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rooms {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      openingHours {
        id
        day
        isActive
        times
        companyID
        appointments {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDoctorHours = /* GraphQL */ `
  query ListDoctorHours(
    $filter: ModelDoctorHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoctorHours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        doctorId
        openingHoursId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        openingHours {
          id
          day
          isActive
          times
          companyID
          appointments {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const doctorHoursByDoctorId = /* GraphQL */ `
  query DoctorHoursByDoctorId(
    $doctorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDoctorHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    doctorHoursByDoctorId(
      doctorId: $doctorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        openingHoursId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        openingHours {
          id
          day
          isActive
          times
          companyID
          appointments {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const doctorHoursByOpeningHoursId = /* GraphQL */ `
  query DoctorHoursByOpeningHoursId(
    $openingHoursId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDoctorHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    doctorHoursByOpeningHoursId(
      openingHoursId: $openingHoursId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        openingHoursId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        openingHours {
          id
          day
          isActive
          times
          companyID
          appointments {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDoctorRoom = /* GraphQL */ `
  query GetDoctorRoom($id: ID!) {
    getDoctorRoom(id: $id) {
      id
      doctorId
      roomId
      doctor {
        id
        companyID
        lastName
        firstName
        experience
        email
        title
        specialty
        insurance
        education
        languages
        appointments {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctorInfo
        timeOffs {
          items {
            id
            doctorId
            timeOffId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            timeOff {
              id
              type
              timeSpan
              startDate
              startTime
              endDate
              endTime
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        openingHours {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        rooms {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      room {
        id
        name
        number
        information
        doctors {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appointments {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        companyID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDoctorRooms = /* GraphQL */ `
  query ListDoctorRooms(
    $filter: ModelDoctorRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoctorRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        doctorId
        roomId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        room {
          id
          name
          number
          information
          doctors {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          appointments {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          companyID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const doctorRoomsByDoctorId = /* GraphQL */ `
  query DoctorRoomsByDoctorId(
    $doctorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDoctorRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    doctorRoomsByDoctorId(
      doctorId: $doctorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        roomId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        room {
          id
          name
          number
          information
          doctors {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          appointments {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          companyID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const doctorRoomsByRoomId = /* GraphQL */ `
  query DoctorRoomsByRoomId(
    $roomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDoctorRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    doctorRoomsByRoomId(
      roomId: $roomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorId
        roomId
        doctor {
          id
          companyID
          lastName
          firstName
          experience
          email
          title
          specialty
          insurance
          education
          languages
          appointments {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctorInfo
          timeOffs {
            items {
              id
              doctorId
              timeOffId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          openingHours {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          rooms {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        room {
          id
          name
          number
          information
          doctors {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          appointments {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          companyID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAppointmentRoom = /* GraphQL */ `
  query GetAppointmentRoom($id: ID!) {
    getAppointmentRoom(id: $id) {
      id
      roomId
      appointmentId
      room {
        id
        name
        number
        information
        doctors {
          items {
            id
            doctorId
            roomId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appointments {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        companyID
        createdAt
        updatedAt
        __typename
      }
      appointment {
        id
        name
        booker
        insurance
        privateDuration
        governmentalDuration
        OpeningHours {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        minBookTime
        maxBookTime
        recallTime
        sendNotification
        type
        directory
        items
        companyID
        rooms {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAppointmentRooms = /* GraphQL */ `
  query ListAppointmentRooms(
    $filter: ModelAppointmentRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roomId
        appointmentId
        room {
          id
          name
          number
          information
          doctors {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          appointments {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          companyID
          createdAt
          updatedAt
          __typename
        }
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const appointmentRoomsByRoomId = /* GraphQL */ `
  query AppointmentRoomsByRoomId(
    $roomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentRoomsByRoomId(
      roomId: $roomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roomId
        appointmentId
        room {
          id
          name
          number
          information
          doctors {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          appointments {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          companyID
          createdAt
          updatedAt
          __typename
        }
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const appointmentRoomsByAppointmentId = /* GraphQL */ `
  query AppointmentRoomsByAppointmentId(
    $appointmentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentRoomsByAppointmentId(
      appointmentId: $appointmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roomId
        appointmentId
        room {
          id
          name
          number
          information
          doctors {
            items {
              id
              doctorId
              roomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          appointments {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          companyID
          createdAt
          updatedAt
          __typename
        }
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAppointmentHours = /* GraphQL */ `
  query GetAppointmentHours($id: ID!) {
    getAppointmentHours(id: $id) {
      id
      appointmentId
      openingHoursId
      appointment {
        id
        name
        booker
        insurance
        privateDuration
        governmentalDuration
        OpeningHours {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        isSameHours
        minBookTime
        maxBookTime
        recallTime
        sendNotification
        type
        directory
        items
        companyID
        rooms {
          items {
            id
            roomId
            appointmentId
            room {
              id
              name
              number
              information
              companyID
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            appointmentId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      openingHours {
        id
        day
        isActive
        times
        companyID
        appointments {
          items {
            id
            appointmentId
            openingHoursId
            appointment {
              id
              name
              booker
              insurance
              privateDuration
              governmentalDuration
              isSameHours
              minBookTime
              maxBookTime
              recallTime
              sendNotification
              type
              directory
              items
              companyID
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        doctors {
          items {
            id
            doctorId
            openingHoursId
            doctor {
              id
              companyID
              lastName
              firstName
              experience
              email
              title
              specialty
              insurance
              education
              languages
              doctorInfo
              isSameHours
              createdAt
              updatedAt
              __typename
            }
            openingHours {
              id
              day
              isActive
              times
              companyID
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAppointmentHours = /* GraphQL */ `
  query ListAppointmentHours(
    $filter: ModelAppointmentHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentHours(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        appointmentId
        openingHoursId
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        openingHours {
          id
          day
          isActive
          times
          companyID
          appointments {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const appointmentHoursByAppointmentId = /* GraphQL */ `
  query AppointmentHoursByAppointmentId(
    $appointmentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentHoursByAppointmentId(
      appointmentId: $appointmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        appointmentId
        openingHoursId
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        openingHours {
          id
          day
          isActive
          times
          companyID
          appointments {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const appointmentHoursByOpeningHoursId = /* GraphQL */ `
  query AppointmentHoursByOpeningHoursId(
    $openingHoursId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentHoursFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentHoursByOpeningHoursId(
      openingHoursId: $openingHoursId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        appointmentId
        openingHoursId
        appointment {
          id
          name
          booker
          insurance
          privateDuration
          governmentalDuration
          OpeningHours {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          isSameHours
          minBookTime
          maxBookTime
          recallTime
          sendNotification
          type
          directory
          items
          companyID
          rooms {
            items {
              id
              roomId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              appointmentId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        openingHours {
          id
          day
          isActive
          times
          companyID
          appointments {
            items {
              id
              appointmentId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          doctors {
            items {
              id
              doctorId
              openingHoursId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDoctor = /* GraphQL */ `
  subscription OnCreateDoctor($filter: ModelSubscriptionDoctorFilterInput) {
    onCreateDoctor(filter: $filter) {
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
export const onUpdateDoctor = /* GraphQL */ `
  subscription OnUpdateDoctor($filter: ModelSubscriptionDoctorFilterInput) {
    onUpdateDoctor(filter: $filter) {
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
export const onDeleteDoctor = /* GraphQL */ `
  subscription OnDeleteDoctor($filter: ModelSubscriptionDoctorFilterInput) {
    onDeleteDoctor(filter: $filter) {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onCreateRoom(filter: $filter) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onUpdateRoom(filter: $filter) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
    onDeleteRoom(filter: $filter) {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
export const onCreateTimeOff = /* GraphQL */ `
  subscription OnCreateTimeOff($filter: ModelSubscriptionTimeOffFilterInput) {
    onCreateTimeOff(filter: $filter) {
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
export const onUpdateTimeOff = /* GraphQL */ `
  subscription OnUpdateTimeOff($filter: ModelSubscriptionTimeOffFilterInput) {
    onUpdateTimeOff(filter: $filter) {
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
export const onDeleteTimeOff = /* GraphQL */ `
  subscription OnDeleteTimeOff($filter: ModelSubscriptionTimeOffFilterInput) {
    onDeleteTimeOff(filter: $filter) {
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
export const onCreateOpeningHours = /* GraphQL */ `
  subscription OnCreateOpeningHours(
    $filter: ModelSubscriptionOpeningHoursFilterInput
  ) {
    onCreateOpeningHours(filter: $filter) {
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
export const onUpdateOpeningHours = /* GraphQL */ `
  subscription OnUpdateOpeningHours(
    $filter: ModelSubscriptionOpeningHoursFilterInput
  ) {
    onUpdateOpeningHours(filter: $filter) {
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
export const onDeleteOpeningHours = /* GraphQL */ `
  subscription OnDeleteOpeningHours(
    $filter: ModelSubscriptionOpeningHoursFilterInput
  ) {
    onDeleteOpeningHours(filter: $filter) {
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
export const onCreateCallHours = /* GraphQL */ `
  subscription OnCreateCallHours(
    $filter: ModelSubscriptionCallHoursFilterInput
  ) {
    onCreateCallHours(filter: $filter) {
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
export const onUpdateCallHours = /* GraphQL */ `
  subscription OnUpdateCallHours(
    $filter: ModelSubscriptionCallHoursFilterInput
  ) {
    onUpdateCallHours(filter: $filter) {
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
export const onDeleteCallHours = /* GraphQL */ `
  subscription OnDeleteCallHours(
    $filter: ModelSubscriptionCallHoursFilterInput
  ) {
    onDeleteCallHours(filter: $filter) {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onCreateCampaign(filter: $filter) {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onUpdateCampaign(filter: $filter) {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onDeleteCampaign(filter: $filter) {
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
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent($filter: ModelSubscriptionAgentFilterInput) {
    onCreateAgent(filter: $filter) {
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
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent($filter: ModelSubscriptionAgentFilterInput) {
    onUpdateAgent(filter: $filter) {
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
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent($filter: ModelSubscriptionAgentFilterInput) {
    onDeleteAgent(filter: $filter) {
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
export const onCreateHints = /* GraphQL */ `
  subscription OnCreateHints($filter: ModelSubscriptionHintsFilterInput) {
    onCreateHints(filter: $filter) {
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
export const onUpdateHints = /* GraphQL */ `
  subscription OnUpdateHints($filter: ModelSubscriptionHintsFilterInput) {
    onUpdateHints(filter: $filter) {
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
export const onDeleteHints = /* GraphQL */ `
  subscription OnDeleteHints($filter: ModelSubscriptionHintsFilterInput) {
    onDeleteHints(filter: $filter) {
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
export const onCreateCampaignHeader = /* GraphQL */ `
  subscription OnCreateCampaignHeader(
    $filter: ModelSubscriptionCampaignHeaderFilterInput
  ) {
    onCreateCampaignHeader(filter: $filter) {
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
export const onUpdateCampaignHeader = /* GraphQL */ `
  subscription OnUpdateCampaignHeader(
    $filter: ModelSubscriptionCampaignHeaderFilterInput
  ) {
    onUpdateCampaignHeader(filter: $filter) {
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
export const onDeleteCampaignHeader = /* GraphQL */ `
  subscription OnDeleteCampaignHeader(
    $filter: ModelSubscriptionCampaignHeaderFilterInput
  ) {
    onDeleteCampaignHeader(filter: $filter) {
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
export const onCreateClientCustomers = /* GraphQL */ `
  subscription OnCreateClientCustomers(
    $filter: ModelSubscriptionClientCustomersFilterInput
  ) {
    onCreateClientCustomers(filter: $filter) {
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
export const onUpdateClientCustomers = /* GraphQL */ `
  subscription OnUpdateClientCustomers(
    $filter: ModelSubscriptionClientCustomersFilterInput
  ) {
    onUpdateClientCustomers(filter: $filter) {
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
export const onDeleteClientCustomers = /* GraphQL */ `
  subscription OnDeleteClientCustomers(
    $filter: ModelSubscriptionClientCustomersFilterInput
  ) {
    onDeleteClientCustomers(filter: $filter) {
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
export const onCreateCalls = /* GraphQL */ `
  subscription OnCreateCalls($filter: ModelSubscriptionCallsFilterInput) {
    onCreateCalls(filter: $filter) {
      id
      clientID
      createdAt
      updatedAt
      clientAccountsCallsId
      __typename
    }
  }
`;
export const onUpdateCalls = /* GraphQL */ `
  subscription OnUpdateCalls($filter: ModelSubscriptionCallsFilterInput) {
    onUpdateCalls(filter: $filter) {
      id
      clientID
      createdAt
      updatedAt
      clientAccountsCallsId
      __typename
    }
  }
`;
export const onDeleteCalls = /* GraphQL */ `
  subscription OnDeleteCalls($filter: ModelSubscriptionCallsFilterInput) {
    onDeleteCalls(filter: $filter) {
      id
      clientID
      createdAt
      updatedAt
      clientAccountsCallsId
      __typename
    }
  }
`;
export const onCreateCallOutbound = /* GraphQL */ `
  subscription OnCreateCallOutbound(
    $filter: ModelSubscriptionCallOutboundFilterInput
  ) {
    onCreateCallOutbound(filter: $filter) {
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
export const onUpdateCallOutbound = /* GraphQL */ `
  subscription OnUpdateCallOutbound(
    $filter: ModelSubscriptionCallOutboundFilterInput
  ) {
    onUpdateCallOutbound(filter: $filter) {
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
export const onDeleteCallOutbound = /* GraphQL */ `
  subscription OnDeleteCallOutbound(
    $filter: ModelSubscriptionCallOutboundFilterInput
  ) {
    onDeleteCallOutbound(filter: $filter) {
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
export const onCreateCallInbound = /* GraphQL */ `
  subscription OnCreateCallInbound(
    $filter: ModelSubscriptionCallInboundFilterInput
  ) {
    onCreateCallInbound(filter: $filter) {
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
export const onUpdateCallInbound = /* GraphQL */ `
  subscription OnUpdateCallInbound(
    $filter: ModelSubscriptionCallInboundFilterInput
  ) {
    onUpdateCallInbound(filter: $filter) {
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
export const onDeleteCallInbound = /* GraphQL */ `
  subscription OnDeleteCallInbound(
    $filter: ModelSubscriptionCallInboundFilterInput
  ) {
    onDeleteCallInbound(filter: $filter) {
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
export const onCreateClientAccounts = /* GraphQL */ `
  subscription OnCreateClientAccounts(
    $filter: ModelSubscriptionClientAccountsFilterInput
  ) {
    onCreateClientAccounts(filter: $filter) {
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
export const onUpdateClientAccounts = /* GraphQL */ `
  subscription OnUpdateClientAccounts(
    $filter: ModelSubscriptionClientAccountsFilterInput
  ) {
    onUpdateClientAccounts(filter: $filter) {
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
export const onDeleteClientAccounts = /* GraphQL */ `
  subscription OnDeleteClientAccounts(
    $filter: ModelSubscriptionClientAccountsFilterInput
  ) {
    onDeleteClientAccounts(filter: $filter) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateCompanyPayments = /* GraphQL */ `
  subscription OnCreateCompanyPayments(
    $filter: ModelSubscriptionCompanyPaymentsFilterInput
  ) {
    onCreateCompanyPayments(filter: $filter) {
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
export const onUpdateCompanyPayments = /* GraphQL */ `
  subscription OnUpdateCompanyPayments(
    $filter: ModelSubscriptionCompanyPaymentsFilterInput
  ) {
    onUpdateCompanyPayments(filter: $filter) {
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
export const onDeleteCompanyPayments = /* GraphQL */ `
  subscription OnDeleteCompanyPayments(
    $filter: ModelSubscriptionCompanyPaymentsFilterInput
  ) {
    onDeleteCompanyPayments(filter: $filter) {
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
export const onCreateSubscriptions = /* GraphQL */ `
  subscription OnCreateSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onCreateSubscriptions(filter: $filter) {
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
export const onUpdateSubscriptions = /* GraphQL */ `
  subscription OnUpdateSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onUpdateSubscriptions(filter: $filter) {
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
export const onDeleteSubscriptions = /* GraphQL */ `
  subscription OnDeleteSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onDeleteSubscriptions(filter: $filter) {
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
export const onCreateTelemetry = /* GraphQL */ `
  subscription OnCreateTelemetry(
    $filter: ModelSubscriptionTelemetryFilterInput
  ) {
    onCreateTelemetry(filter: $filter) {
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
export const onUpdateTelemetry = /* GraphQL */ `
  subscription OnUpdateTelemetry(
    $filter: ModelSubscriptionTelemetryFilterInput
  ) {
    onUpdateTelemetry(filter: $filter) {
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
export const onDeleteTelemetry = /* GraphQL */ `
  subscription OnDeleteTelemetry(
    $filter: ModelSubscriptionTelemetryFilterInput
  ) {
    onDeleteTelemetry(filter: $filter) {
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
export const onCreateTargetGroupHeader = /* GraphQL */ `
  subscription OnCreateTargetGroupHeader(
    $filter: ModelSubscriptionTargetGroupHeaderFilterInput
  ) {
    onCreateTargetGroupHeader(filter: $filter) {
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
export const onUpdateTargetGroupHeader = /* GraphQL */ `
  subscription OnUpdateTargetGroupHeader(
    $filter: ModelSubscriptionTargetGroupHeaderFilterInput
  ) {
    onUpdateTargetGroupHeader(filter: $filter) {
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
export const onDeleteTargetGroupHeader = /* GraphQL */ `
  subscription OnDeleteTargetGroupHeader(
    $filter: ModelSubscriptionTargetGroupHeaderFilterInput
  ) {
    onDeleteTargetGroupHeader(filter: $filter) {
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
export const onCreateTargetGroup = /* GraphQL */ `
  subscription OnCreateTargetGroup(
    $filter: ModelSubscriptionTargetGroupFilterInput
  ) {
    onCreateTargetGroup(filter: $filter) {
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
export const onUpdateTargetGroup = /* GraphQL */ `
  subscription OnUpdateTargetGroup(
    $filter: ModelSubscriptionTargetGroupFilterInput
  ) {
    onUpdateTargetGroup(filter: $filter) {
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
export const onDeleteTargetGroup = /* GraphQL */ `
  subscription OnDeleteTargetGroup(
    $filter: ModelSubscriptionTargetGroupFilterInput
  ) {
    onDeleteTargetGroup(filter: $filter) {
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
export const onCreateOneTimePasswords = /* GraphQL */ `
  subscription OnCreateOneTimePasswords(
    $filter: ModelSubscriptionOneTimePasswordsFilterInput
  ) {
    onCreateOneTimePasswords(filter: $filter) {
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
export const onUpdateOneTimePasswords = /* GraphQL */ `
  subscription OnUpdateOneTimePasswords(
    $filter: ModelSubscriptionOneTimePasswordsFilterInput
  ) {
    onUpdateOneTimePasswords(filter: $filter) {
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
export const onDeleteOneTimePasswords = /* GraphQL */ `
  subscription OnDeleteOneTimePasswords(
    $filter: ModelSubscriptionOneTimePasswordsFilterInput
  ) {
    onDeleteOneTimePasswords(filter: $filter) {
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
export const onCreateAppointmentDoctor = /* GraphQL */ `
  subscription OnCreateAppointmentDoctor(
    $filter: ModelSubscriptionAppointmentDoctorFilterInput
  ) {
    onCreateAppointmentDoctor(filter: $filter) {
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
export const onUpdateAppointmentDoctor = /* GraphQL */ `
  subscription OnUpdateAppointmentDoctor(
    $filter: ModelSubscriptionAppointmentDoctorFilterInput
  ) {
    onUpdateAppointmentDoctor(filter: $filter) {
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
export const onDeleteAppointmentDoctor = /* GraphQL */ `
  subscription OnDeleteAppointmentDoctor(
    $filter: ModelSubscriptionAppointmentDoctorFilterInput
  ) {
    onDeleteAppointmentDoctor(filter: $filter) {
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
export const onCreateTimeOffDoctor = /* GraphQL */ `
  subscription OnCreateTimeOffDoctor(
    $filter: ModelSubscriptionTimeOffDoctorFilterInput
  ) {
    onCreateTimeOffDoctor(filter: $filter) {
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
export const onUpdateTimeOffDoctor = /* GraphQL */ `
  subscription OnUpdateTimeOffDoctor(
    $filter: ModelSubscriptionTimeOffDoctorFilterInput
  ) {
    onUpdateTimeOffDoctor(filter: $filter) {
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
export const onDeleteTimeOffDoctor = /* GraphQL */ `
  subscription OnDeleteTimeOffDoctor(
    $filter: ModelSubscriptionTimeOffDoctorFilterInput
  ) {
    onDeleteTimeOffDoctor(filter: $filter) {
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
export const onCreateDoctorHours = /* GraphQL */ `
  subscription OnCreateDoctorHours(
    $filter: ModelSubscriptionDoctorHoursFilterInput
  ) {
    onCreateDoctorHours(filter: $filter) {
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
export const onUpdateDoctorHours = /* GraphQL */ `
  subscription OnUpdateDoctorHours(
    $filter: ModelSubscriptionDoctorHoursFilterInput
  ) {
    onUpdateDoctorHours(filter: $filter) {
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
export const onDeleteDoctorHours = /* GraphQL */ `
  subscription OnDeleteDoctorHours(
    $filter: ModelSubscriptionDoctorHoursFilterInput
  ) {
    onDeleteDoctorHours(filter: $filter) {
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
export const onCreateDoctorRoom = /* GraphQL */ `
  subscription OnCreateDoctorRoom(
    $filter: ModelSubscriptionDoctorRoomFilterInput
  ) {
    onCreateDoctorRoom(filter: $filter) {
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
export const onUpdateDoctorRoom = /* GraphQL */ `
  subscription OnUpdateDoctorRoom(
    $filter: ModelSubscriptionDoctorRoomFilterInput
  ) {
    onUpdateDoctorRoom(filter: $filter) {
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
export const onDeleteDoctorRoom = /* GraphQL */ `
  subscription OnDeleteDoctorRoom(
    $filter: ModelSubscriptionDoctorRoomFilterInput
  ) {
    onDeleteDoctorRoom(filter: $filter) {
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
export const onCreateAppointmentRoom = /* GraphQL */ `
  subscription OnCreateAppointmentRoom(
    $filter: ModelSubscriptionAppointmentRoomFilterInput
  ) {
    onCreateAppointmentRoom(filter: $filter) {
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
export const onUpdateAppointmentRoom = /* GraphQL */ `
  subscription OnUpdateAppointmentRoom(
    $filter: ModelSubscriptionAppointmentRoomFilterInput
  ) {
    onUpdateAppointmentRoom(filter: $filter) {
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
export const onDeleteAppointmentRoom = /* GraphQL */ `
  subscription OnDeleteAppointmentRoom(
    $filter: ModelSubscriptionAppointmentRoomFilterInput
  ) {
    onDeleteAppointmentRoom(filter: $filter) {
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
export const onCreateAppointmentHours = /* GraphQL */ `
  subscription OnCreateAppointmentHours(
    $filter: ModelSubscriptionAppointmentHoursFilterInput
  ) {
    onCreateAppointmentHours(filter: $filter) {
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
export const onUpdateAppointmentHours = /* GraphQL */ `
  subscription OnUpdateAppointmentHours(
    $filter: ModelSubscriptionAppointmentHoursFilterInput
  ) {
    onUpdateAppointmentHours(filter: $filter) {
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
export const onDeleteAppointmentHours = /* GraphQL */ `
  subscription OnDeleteAppointmentHours(
    $filter: ModelSubscriptionAppointmentHoursFilterInput
  ) {
    onDeleteAppointmentHours(filter: $filter) {
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

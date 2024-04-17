/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDoctor = /* GraphQL */ `
  mutation CreateDoctor(
    $input: CreateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    createDoctor(input: $input, condition: $condition) {
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
export const updateDoctor = /* GraphQL */ `
  mutation UpdateDoctor(
    $input: UpdateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    updateDoctor(input: $input, condition: $condition) {
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
export const deleteDoctor = /* GraphQL */ `
  mutation DeleteDoctor(
    $input: DeleteDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    deleteDoctor(input: $input, condition: $condition) {
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
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
export const createTimeOff = /* GraphQL */ `
  mutation CreateTimeOff(
    $input: CreateTimeOffInput!
    $condition: ModelTimeOffConditionInput
  ) {
    createTimeOff(input: $input, condition: $condition) {
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
export const updateTimeOff = /* GraphQL */ `
  mutation UpdateTimeOff(
    $input: UpdateTimeOffInput!
    $condition: ModelTimeOffConditionInput
  ) {
    updateTimeOff(input: $input, condition: $condition) {
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
export const deleteTimeOff = /* GraphQL */ `
  mutation DeleteTimeOff(
    $input: DeleteTimeOffInput!
    $condition: ModelTimeOffConditionInput
  ) {
    deleteTimeOff(input: $input, condition: $condition) {
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
export const createOpeningHours = /* GraphQL */ `
  mutation CreateOpeningHours(
    $input: CreateOpeningHoursInput!
    $condition: ModelOpeningHoursConditionInput
  ) {
    createOpeningHours(input: $input, condition: $condition) {
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
export const updateOpeningHours = /* GraphQL */ `
  mutation UpdateOpeningHours(
    $input: UpdateOpeningHoursInput!
    $condition: ModelOpeningHoursConditionInput
  ) {
    updateOpeningHours(input: $input, condition: $condition) {
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
export const deleteOpeningHours = /* GraphQL */ `
  mutation DeleteOpeningHours(
    $input: DeleteOpeningHoursInput!
    $condition: ModelOpeningHoursConditionInput
  ) {
    deleteOpeningHours(input: $input, condition: $condition) {
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
export const createCallHours = /* GraphQL */ `
  mutation CreateCallHours(
    $input: CreateCallHoursInput!
    $condition: ModelCallHoursConditionInput
  ) {
    createCallHours(input: $input, condition: $condition) {
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
export const updateCallHours = /* GraphQL */ `
  mutation UpdateCallHours(
    $input: UpdateCallHoursInput!
    $condition: ModelCallHoursConditionInput
  ) {
    updateCallHours(input: $input, condition: $condition) {
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
export const deleteCallHours = /* GraphQL */ `
  mutation DeleteCallHours(
    $input: DeleteCallHoursInput!
    $condition: ModelCallHoursConditionInput
  ) {
    deleteCallHours(input: $input, condition: $condition) {
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
export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createAgent = /* GraphQL */ `
  mutation CreateAgent(
    $input: CreateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    createAgent(input: $input, condition: $condition) {
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
export const updateAgent = /* GraphQL */ `
  mutation UpdateAgent(
    $input: UpdateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    updateAgent(input: $input, condition: $condition) {
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
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent(
    $input: DeleteAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    deleteAgent(input: $input, condition: $condition) {
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
export const createHints = /* GraphQL */ `
  mutation CreateHints(
    $input: CreateHintsInput!
    $condition: ModelHintsConditionInput
  ) {
    createHints(input: $input, condition: $condition) {
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
export const updateHints = /* GraphQL */ `
  mutation UpdateHints(
    $input: UpdateHintsInput!
    $condition: ModelHintsConditionInput
  ) {
    updateHints(input: $input, condition: $condition) {
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
export const deleteHints = /* GraphQL */ `
  mutation DeleteHints(
    $input: DeleteHintsInput!
    $condition: ModelHintsConditionInput
  ) {
    deleteHints(input: $input, condition: $condition) {
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
export const createCampaignHeader = /* GraphQL */ `
  mutation CreateCampaignHeader(
    $input: CreateCampaignHeaderInput!
    $condition: ModelCampaignHeaderConditionInput
  ) {
    createCampaignHeader(input: $input, condition: $condition) {
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
export const updateCampaignHeader = /* GraphQL */ `
  mutation UpdateCampaignHeader(
    $input: UpdateCampaignHeaderInput!
    $condition: ModelCampaignHeaderConditionInput
  ) {
    updateCampaignHeader(input: $input, condition: $condition) {
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
export const deleteCampaignHeader = /* GraphQL */ `
  mutation DeleteCampaignHeader(
    $input: DeleteCampaignHeaderInput!
    $condition: ModelCampaignHeaderConditionInput
  ) {
    deleteCampaignHeader(input: $input, condition: $condition) {
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
export const createClientCustomers = /* GraphQL */ `
  mutation CreateClientCustomers(
    $input: CreateClientCustomersInput!
    $condition: ModelClientCustomersConditionInput
  ) {
    createClientCustomers(input: $input, condition: $condition) {
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
export const updateClientCustomers = /* GraphQL */ `
  mutation UpdateClientCustomers(
    $input: UpdateClientCustomersInput!
    $condition: ModelClientCustomersConditionInput
  ) {
    updateClientCustomers(input: $input, condition: $condition) {
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
export const deleteClientCustomers = /* GraphQL */ `
  mutation DeleteClientCustomers(
    $input: DeleteClientCustomersInput!
    $condition: ModelClientCustomersConditionInput
  ) {
    deleteClientCustomers(input: $input, condition: $condition) {
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
export const createCalls = /* GraphQL */ `
  mutation CreateCalls(
    $input: CreateCallsInput!
    $condition: ModelCallsConditionInput
  ) {
    createCalls(input: $input, condition: $condition) {
      id
      clientID
      createdAt
      updatedAt
      clientAccountsCallsId
      __typename
    }
  }
`;
export const updateCalls = /* GraphQL */ `
  mutation UpdateCalls(
    $input: UpdateCallsInput!
    $condition: ModelCallsConditionInput
  ) {
    updateCalls(input: $input, condition: $condition) {
      id
      clientID
      createdAt
      updatedAt
      clientAccountsCallsId
      __typename
    }
  }
`;
export const deleteCalls = /* GraphQL */ `
  mutation DeleteCalls(
    $input: DeleteCallsInput!
    $condition: ModelCallsConditionInput
  ) {
    deleteCalls(input: $input, condition: $condition) {
      id
      clientID
      createdAt
      updatedAt
      clientAccountsCallsId
      __typename
    }
  }
`;
export const createCallOutbound = /* GraphQL */ `
  mutation CreateCallOutbound(
    $input: CreateCallOutboundInput!
    $condition: ModelCallOutboundConditionInput
  ) {
    createCallOutbound(input: $input, condition: $condition) {
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
export const updateCallOutbound = /* GraphQL */ `
  mutation UpdateCallOutbound(
    $input: UpdateCallOutboundInput!
    $condition: ModelCallOutboundConditionInput
  ) {
    updateCallOutbound(input: $input, condition: $condition) {
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
export const deleteCallOutbound = /* GraphQL */ `
  mutation DeleteCallOutbound(
    $input: DeleteCallOutboundInput!
    $condition: ModelCallOutboundConditionInput
  ) {
    deleteCallOutbound(input: $input, condition: $condition) {
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
export const createCallInbound = /* GraphQL */ `
  mutation CreateCallInbound(
    $input: CreateCallInboundInput!
    $condition: ModelCallInboundConditionInput
  ) {
    createCallInbound(input: $input, condition: $condition) {
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
export const updateCallInbound = /* GraphQL */ `
  mutation UpdateCallInbound(
    $input: UpdateCallInboundInput!
    $condition: ModelCallInboundConditionInput
  ) {
    updateCallInbound(input: $input, condition: $condition) {
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
export const deleteCallInbound = /* GraphQL */ `
  mutation DeleteCallInbound(
    $input: DeleteCallInboundInput!
    $condition: ModelCallInboundConditionInput
  ) {
    deleteCallInbound(input: $input, condition: $condition) {
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
export const createClientAccounts = /* GraphQL */ `
  mutation CreateClientAccounts(
    $input: CreateClientAccountsInput!
    $condition: ModelClientAccountsConditionInput
  ) {
    createClientAccounts(input: $input, condition: $condition) {
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
export const updateClientAccounts = /* GraphQL */ `
  mutation UpdateClientAccounts(
    $input: UpdateClientAccountsInput!
    $condition: ModelClientAccountsConditionInput
  ) {
    updateClientAccounts(input: $input, condition: $condition) {
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
export const deleteClientAccounts = /* GraphQL */ `
  mutation DeleteClientAccounts(
    $input: DeleteClientAccountsInput!
    $condition: ModelClientAccountsConditionInput
  ) {
    deleteClientAccounts(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createCompanyPayments = /* GraphQL */ `
  mutation CreateCompanyPayments(
    $input: CreateCompanyPaymentsInput!
    $condition: ModelCompanyPaymentsConditionInput
  ) {
    createCompanyPayments(input: $input, condition: $condition) {
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
export const updateCompanyPayments = /* GraphQL */ `
  mutation UpdateCompanyPayments(
    $input: UpdateCompanyPaymentsInput!
    $condition: ModelCompanyPaymentsConditionInput
  ) {
    updateCompanyPayments(input: $input, condition: $condition) {
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
export const deleteCompanyPayments = /* GraphQL */ `
  mutation DeleteCompanyPayments(
    $input: DeleteCompanyPaymentsInput!
    $condition: ModelCompanyPaymentsConditionInput
  ) {
    deleteCompanyPayments(input: $input, condition: $condition) {
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
export const createSubscriptions = /* GraphQL */ `
  mutation CreateSubscriptions(
    $input: CreateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    createSubscriptions(input: $input, condition: $condition) {
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
export const updateSubscriptions = /* GraphQL */ `
  mutation UpdateSubscriptions(
    $input: UpdateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    updateSubscriptions(input: $input, condition: $condition) {
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
export const deleteSubscriptions = /* GraphQL */ `
  mutation DeleteSubscriptions(
    $input: DeleteSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    deleteSubscriptions(input: $input, condition: $condition) {
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
export const createTelemetry = /* GraphQL */ `
  mutation CreateTelemetry(
    $input: CreateTelemetryInput!
    $condition: ModelTelemetryConditionInput
  ) {
    createTelemetry(input: $input, condition: $condition) {
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
export const updateTelemetry = /* GraphQL */ `
  mutation UpdateTelemetry(
    $input: UpdateTelemetryInput!
    $condition: ModelTelemetryConditionInput
  ) {
    updateTelemetry(input: $input, condition: $condition) {
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
export const deleteTelemetry = /* GraphQL */ `
  mutation DeleteTelemetry(
    $input: DeleteTelemetryInput!
    $condition: ModelTelemetryConditionInput
  ) {
    deleteTelemetry(input: $input, condition: $condition) {
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
export const createTargetGroupHeader = /* GraphQL */ `
  mutation CreateTargetGroupHeader(
    $input: CreateTargetGroupHeaderInput!
    $condition: ModelTargetGroupHeaderConditionInput
  ) {
    createTargetGroupHeader(input: $input, condition: $condition) {
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
export const updateTargetGroupHeader = /* GraphQL */ `
  mutation UpdateTargetGroupHeader(
    $input: UpdateTargetGroupHeaderInput!
    $condition: ModelTargetGroupHeaderConditionInput
  ) {
    updateTargetGroupHeader(input: $input, condition: $condition) {
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
export const deleteTargetGroupHeader = /* GraphQL */ `
  mutation DeleteTargetGroupHeader(
    $input: DeleteTargetGroupHeaderInput!
    $condition: ModelTargetGroupHeaderConditionInput
  ) {
    deleteTargetGroupHeader(input: $input, condition: $condition) {
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
export const createTargetGroup = /* GraphQL */ `
  mutation CreateTargetGroup(
    $input: CreateTargetGroupInput!
    $condition: ModelTargetGroupConditionInput
  ) {
    createTargetGroup(input: $input, condition: $condition) {
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
export const updateTargetGroup = /* GraphQL */ `
  mutation UpdateTargetGroup(
    $input: UpdateTargetGroupInput!
    $condition: ModelTargetGroupConditionInput
  ) {
    updateTargetGroup(input: $input, condition: $condition) {
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
export const deleteTargetGroup = /* GraphQL */ `
  mutation DeleteTargetGroup(
    $input: DeleteTargetGroupInput!
    $condition: ModelTargetGroupConditionInput
  ) {
    deleteTargetGroup(input: $input, condition: $condition) {
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
export const createOneTimePasswords = /* GraphQL */ `
  mutation CreateOneTimePasswords(
    $input: CreateOneTimePasswordsInput!
    $condition: ModelOneTimePasswordsConditionInput
  ) {
    createOneTimePasswords(input: $input, condition: $condition) {
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
export const updateOneTimePasswords = /* GraphQL */ `
  mutation UpdateOneTimePasswords(
    $input: UpdateOneTimePasswordsInput!
    $condition: ModelOneTimePasswordsConditionInput
  ) {
    updateOneTimePasswords(input: $input, condition: $condition) {
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
export const deleteOneTimePasswords = /* GraphQL */ `
  mutation DeleteOneTimePasswords(
    $input: DeleteOneTimePasswordsInput!
    $condition: ModelOneTimePasswordsConditionInput
  ) {
    deleteOneTimePasswords(input: $input, condition: $condition) {
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
export const createAppointmentDoctor = /* GraphQL */ `
  mutation CreateAppointmentDoctor(
    $input: CreateAppointmentDoctorInput!
    $condition: ModelAppointmentDoctorConditionInput
  ) {
    createAppointmentDoctor(input: $input, condition: $condition) {
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
export const updateAppointmentDoctor = /* GraphQL */ `
  mutation UpdateAppointmentDoctor(
    $input: UpdateAppointmentDoctorInput!
    $condition: ModelAppointmentDoctorConditionInput
  ) {
    updateAppointmentDoctor(input: $input, condition: $condition) {
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
export const deleteAppointmentDoctor = /* GraphQL */ `
  mutation DeleteAppointmentDoctor(
    $input: DeleteAppointmentDoctorInput!
    $condition: ModelAppointmentDoctorConditionInput
  ) {
    deleteAppointmentDoctor(input: $input, condition: $condition) {
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
export const createTimeOffDoctor = /* GraphQL */ `
  mutation CreateTimeOffDoctor(
    $input: CreateTimeOffDoctorInput!
    $condition: ModelTimeOffDoctorConditionInput
  ) {
    createTimeOffDoctor(input: $input, condition: $condition) {
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
export const updateTimeOffDoctor = /* GraphQL */ `
  mutation UpdateTimeOffDoctor(
    $input: UpdateTimeOffDoctorInput!
    $condition: ModelTimeOffDoctorConditionInput
  ) {
    updateTimeOffDoctor(input: $input, condition: $condition) {
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
export const deleteTimeOffDoctor = /* GraphQL */ `
  mutation DeleteTimeOffDoctor(
    $input: DeleteTimeOffDoctorInput!
    $condition: ModelTimeOffDoctorConditionInput
  ) {
    deleteTimeOffDoctor(input: $input, condition: $condition) {
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
export const createDoctorHours = /* GraphQL */ `
  mutation CreateDoctorHours(
    $input: CreateDoctorHoursInput!
    $condition: ModelDoctorHoursConditionInput
  ) {
    createDoctorHours(input: $input, condition: $condition) {
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
export const updateDoctorHours = /* GraphQL */ `
  mutation UpdateDoctorHours(
    $input: UpdateDoctorHoursInput!
    $condition: ModelDoctorHoursConditionInput
  ) {
    updateDoctorHours(input: $input, condition: $condition) {
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
export const deleteDoctorHours = /* GraphQL */ `
  mutation DeleteDoctorHours(
    $input: DeleteDoctorHoursInput!
    $condition: ModelDoctorHoursConditionInput
  ) {
    deleteDoctorHours(input: $input, condition: $condition) {
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
export const createDoctorRoom = /* GraphQL */ `
  mutation CreateDoctorRoom(
    $input: CreateDoctorRoomInput!
    $condition: ModelDoctorRoomConditionInput
  ) {
    createDoctorRoom(input: $input, condition: $condition) {
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
export const updateDoctorRoom = /* GraphQL */ `
  mutation UpdateDoctorRoom(
    $input: UpdateDoctorRoomInput!
    $condition: ModelDoctorRoomConditionInput
  ) {
    updateDoctorRoom(input: $input, condition: $condition) {
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
export const deleteDoctorRoom = /* GraphQL */ `
  mutation DeleteDoctorRoom(
    $input: DeleteDoctorRoomInput!
    $condition: ModelDoctorRoomConditionInput
  ) {
    deleteDoctorRoom(input: $input, condition: $condition) {
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
export const createAppointmentRoom = /* GraphQL */ `
  mutation CreateAppointmentRoom(
    $input: CreateAppointmentRoomInput!
    $condition: ModelAppointmentRoomConditionInput
  ) {
    createAppointmentRoom(input: $input, condition: $condition) {
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
export const updateAppointmentRoom = /* GraphQL */ `
  mutation UpdateAppointmentRoom(
    $input: UpdateAppointmentRoomInput!
    $condition: ModelAppointmentRoomConditionInput
  ) {
    updateAppointmentRoom(input: $input, condition: $condition) {
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
export const deleteAppointmentRoom = /* GraphQL */ `
  mutation DeleteAppointmentRoom(
    $input: DeleteAppointmentRoomInput!
    $condition: ModelAppointmentRoomConditionInput
  ) {
    deleteAppointmentRoom(input: $input, condition: $condition) {
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
export const createAppointmentHours = /* GraphQL */ `
  mutation CreateAppointmentHours(
    $input: CreateAppointmentHoursInput!
    $condition: ModelAppointmentHoursConditionInput
  ) {
    createAppointmentHours(input: $input, condition: $condition) {
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
export const updateAppointmentHours = /* GraphQL */ `
  mutation UpdateAppointmentHours(
    $input: UpdateAppointmentHoursInput!
    $condition: ModelAppointmentHoursConditionInput
  ) {
    updateAppointmentHours(input: $input, condition: $condition) {
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
export const deleteAppointmentHours = /* GraphQL */ `
  mutation DeleteAppointmentHours(
    $input: DeleteAppointmentHoursInput!
    $condition: ModelAppointmentHoursConditionInput
  ) {
    deleteAppointmentHours(input: $input, condition: $condition) {
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

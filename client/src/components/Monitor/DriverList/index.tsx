import './style.scss'

const dummyData = [
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: '1e284825-c17f-4441-a74c-6d812228f7b8',
    name: 'Kathy Okuneva',
    age: 47,
    avatarUrl:
      'https://images.unsplash.com/profile-1610735470884-b5699915e1dcimage?w=400&q=40',
    averageSpeed: 30,
    car: {
      id: 'f57f3e2f-32ad-440a-9371-b1d4ae032df2',
      type: 'Renegade',
      year: 2019,
    },
    journeys: [],
  },
  {
    id: '5fef3932-3256-4f88-adb6-dfe9a0bf03b8',
    name: 'Larry Kuhlman',
    age: 43,
    avatarUrl:
      'https://images.unsplash.com/profile-fb-1544622642-bd417470b1eb.jpg?w=400&q=40',
    averageSpeed: 30,
    car: {
      id: 'd4e983fe-4410-468a-87f1-16c2ef28705e',
      type: 'Midget',
      year: 2013,
    },
    journeys: [],
  },
  {
    id: 'c9b1a6ca-8019-446f-9a37-fe4b54b56c9d',
    name: 'Kent Kuhic',
    age: 45,
    avatarUrl:
      'https://images.unsplash.com/profile-fb-1603253555-1146b8e91703.jpg?w=400&q=40',
    averageSpeed: 39,
    car: {
      id: 'ce4f35fc-909d-41df-8221-60dfb913276a',
      type: 'Sundance',
      year: 2010,
    },
    journeys: [],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: 'b508235f-599e-43ce-8dc3-8b4d60a3c4a5',
    name: 'Patti Barrows',
    age: 42,
    avatarUrl:
      'https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?w=400&q=40',
    averageSpeed: 36,
    car: {
      id: 'b8fa2015-c53b-4e7a-8be0-1c397eb4532d',
      type: 'Breeze',
      year: 2018,
    },
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
]

function DriverList() {
  const generateDriverList = () => {
    return dummyData.map(({ id, name, journeys }) => (
      <li className="driver-row" key={id}>
        <p>{name}</p>
        <p>{journeys[journeys.length - 1]?.status?.toLowerCase()}</p>
      </li>
    ))
  }

  return (
    <div className="driver-list">
      <ul> {generateDriverList()}</ul>
    </div>
  )
}

export default DriverList

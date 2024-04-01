const stats = [
    { id: 1, name: 'In the rental market, premium cars redefine luxury travel experiences', value: '7+ Years' },
    { id: 2, name: 'In the rental market, premium cars redefine luxury travel experiences', value: '72+ vans' },
    { id: 3, name: 'Book now, pay in full 20 days before your trip.', value: 'Book now, pay later!' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-transparent py-16 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
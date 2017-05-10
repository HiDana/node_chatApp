var expect = require('expect');

const {Users} = require('./users')

describe('Users', () => {
	var users
	
	beforeEach(() => {
		users = new Users()
		users.users = [{
			id: '1', 
			name: 'Dana',
			room: 'Hi HI'
		},{
			id: '2', 
			name: 'Even',
			room: 'Yo Yo'
		},{
			id: '3', 
			name: 'Anna',
			room: 'Hi HI'
		}]
	})

	it('should add new user', () => {
		var users = new Users()
		var user = {
			id: '123',
			name: 'Dana',
			room: 'Hi Hi'
		}
		var resUser = users.addUser(user.id, user.name, user.room)

		expect(users.users).toEqual([user])
	})

	it('should remove the user', () => {
		var userId = '1'
		var user = users.removeUser(userId)

		expect(user.id).toBe(userId)
		expect(users.users.length).toBe(2)
	})

	it('should not remove user', () => {
		var userId = '99'
		var user = users.removeUser(userId)

		expect(user).toNotExist();
		expect(users.users.length).toBe(3)
	})
	it('should find user', () => {
		var userId = '2'
		var user = users.getUser(userId)

		expect(user.id).toBe(userId)
	})
	it('should not find user', () => {
		var userId = '99'
		var user = users.getUser(userId)

		expect(user).toNotExist()
	})

	it('should return names for node course', () => {
		var userList = users.getUserList('Hi HI');

		expect(userList).toEqual(['Dana', 'Anna'])
	})
	it('should return names for react course', () => {
    var userList = users.getUserList('Yo Yo');

    expect(userList).toEqual(['Even']);
  });
})
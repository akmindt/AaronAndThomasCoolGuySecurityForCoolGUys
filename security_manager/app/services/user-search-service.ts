export class userResult {
    constructor(
        public user: string,
        public username: string,
        public groups: Array<string>
    )
    {}
}

export class userSearchService {
    getResults(): Array<userResult> {
        return results.map(r => new userResult(r.user, r.username, r.groups));
    }
}

var results = [
    {
        "user": 'user1',
        "username": 'username1',
        "groups": ["group1", "group2"]
    },
    {
        "user": 'user2',
        "username": 'username2',
        "groups": ["group1"]
    },
    {
        "user": 'user3',
        "username": 'username3',
        "groups": ["group2"]
    }
]

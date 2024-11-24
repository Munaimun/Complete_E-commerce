import { Client, Account } from 'appwrite';

const client = new Client();
client.setProject('6741984a0004e0a34ff2');

export const account = new Account(client)

export default client
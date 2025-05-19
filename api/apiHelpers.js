const fs = require('fs');
const path = require('path');
const ld = require('lodash');

class ApiHelpers
{
    constructor(request) 
    {
        this.request = request;
    }

    async getProducts()
    {
        return this.request.get('productsList');
    }

    async getBrands()
    {
        return this.request.get('brandsList');
    }

    async login(email,password)
    {
        return this.request.post('verifyLogin', {
            form: { email, password }});
    }

    async getUserDetailByEmail(email)
    {
        return this.request.get('getUserDetailByEmail', {
            params: { email }});
    }

    async createUserAccount(userData)
    {
        return this.request.post('createAccount', {
            form: userData
        });
    }

}

module.exports=ApiHelpers;
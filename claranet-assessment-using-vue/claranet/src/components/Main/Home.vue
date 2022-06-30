<template>
    <div class="home">
        <h2 class="home-header">Welcome to Beers</h2>
        <div class="home-body">
            <h3 class="home-body-header">Sign In</h3>
            <form action="#">
                <table>
                    <tr>
                        <td><label for="username">Username</label></td>
                        <td><span>:</span></td>
                        <td><input type="text" id="username" name="username" placeholder="Enter User Name"/></td>
                    </tr>
                    <tr>
                        <td><label for="password">Password</label></td>
                        <td><span>:</span></td>
                        <td><input type="password" name="password" id="password" placeholder="Enter Password" /></td>
                    </tr>
                </table>   
            </form>
            <p>Don't you have an acccount? <a href="#" class="click-here">Click here to create an account</a></p>
            <p>Forgot Password? <a href="#" class="click-here">Click here</a></p>
            <a href="#" class="sign-button button">Sign In</a>
        </div>
    </div>
    
</template>

<style>
@import './../../assets/base.css';

@import './../../assets/css/Home.css';

</style>
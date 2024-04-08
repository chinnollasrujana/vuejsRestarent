<template>
    <div class="footer">
        <div class="footer-copyright">
            <p>Copy@right 2024</p>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Footer'
}


</script>
<style>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    line-height: 40px;
    text-align: center;
    margin-top: auto;
    color: #ffffff;
    background-color: #000;
}
.footer hr {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.footer p,
.footer a {
    color: #ffffff;
}

.footer a:hover {
    text-decoration: underline;
}
</style>
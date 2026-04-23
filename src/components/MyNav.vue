<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#"></a>
            <img src="../assets/img/cloud.jpg" alt="Bootstrap" width="50" height="50">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active fw-lighter" :to="{ name: 'home' }">
                            Home
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active fw-lighter" :to="{ name: 'about' }">
                            About
                        </RouterLink>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link active fw-lighter" aria-current="page" href="https://www.104.com.tw"
                            target="_blank">Resume</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'cart-step1' }" style="color: black;">
                            <i class="bi bi-bag-check-fill"></i>
                        </RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-person-circle"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Home</a></li>
                            <li><a class="dropdown-item" href="#">About</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Login</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"></a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

</template>

<style scoped>
/* nav: keep hover but override bootstrap hamburger focus and morph icon */
.nav-link {
    display: inline-flex;
    align-items: center;
    gap: 6px
}

.nav-link:hover {
    color: #2c3e50;
    background: linear-gradient(90deg, rgba(44, 62, 80, 0.08) 0%, rgba(44, 62, 80, 0.02) 100%)
}

.nav-link:focus-visible {
    outline: none;
    box-shadow: 6px 6px 6px 6px rgba(232, 174, 104, 0.12);
    border-radius: 6px
}

.nav-link i {
    color: #6c7a89
}

.nav-link:hover i {
    color: #2c3e50
}

/* Strongly remove bootstrap/browser focus on toggler */
.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler:focus-visible,
.navbar-toggler:focus:active,
.navbar-toggler:focus-within {
    outline: none !important;
    box-shadow: none !important;
    border: 0 !important;
    background: transparent !important;
}

.navbar-toggler::-moz-focus-inner {
    border: 0
}

/* push toggler to right */
.navbar-toggler {
    margin-left: auto
}

/* custom hamburger icon (three lines) using pseudo elements */
.navbar-toggler .navbar-toggler-icon {
    background: none !important;
    display: inline-block;
    position: relative;
    width: 22px;
    height: 2px
}

.navbar-toggler .navbar-toggler-icon,
.navbar-toggler .navbar-toggler-icon::before,
.navbar-toggler .navbar-toggler-icon::after {
    background: #6c7a89;
    border-radius: 2px
}

.navbar-toggler .navbar-toggler-icon::before,
.navbar-toggler .navbar-toggler-icon::after {
    content: '';
    position: absolute;
    left: 0;
    width: 22px;
    height: 2px
}

.navbar-toggler .navbar-toggler-icon {
    top: 0
}

.navbar-toggler .navbar-toggler-icon::before {
    top: -7px
}

.navbar-toggler .navbar-toggler-icon::after {
    top: 7px
}

.navbar-toggler .navbar-toggler-icon,
.navbar-toggler .navbar-toggler-icon::before,
.navbar-toggler .navbar-toggler-icon::after {
    transition: transform .22s ease, opacity .18s ease, top .18s ease
}

/* when expanded -> morph into X */
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
    background: transparent
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::before {
    top: 0;
    transform: rotate(45deg)
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::after {
    top: 0;
    transform: rotate(-45deg)
}

/* hide dropdown caret */
.dropdown-toggle::after {
    display: none !important
}

/* default dropdown alignment to left */
.dropdown-menu[data-bs-popper] {
    left: 0 !important;
    right: auto !important
}

.dropdown-item:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px rgba(232, 174, 104, 0.12)
}

/* Shift account dropdown slightly left on desktop to align under icon */
@media (min-width: 992px) {
    .nav-item.dropdown>.dropdown-menu {
        transform: translateX(-135px);
        /* ensure transform origin is left so animation/placement feels natural */
        transform-origin: left center;
    }
}
</style>
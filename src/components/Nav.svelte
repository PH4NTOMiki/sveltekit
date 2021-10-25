<script>
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    } from 'sveltestrap/src';

    export let links = {};
    export let home = true;
    // variable that control whether mobile menu is open or closed
    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
  </script>
  
  <Navbar color="light" light expand="md">
    {#if home}
        <NavbarBrand sveltekit:prefetch href="/">Home</NavbarBrand>
    {/if}
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update="{handleUpdate}">
      <Nav class="ms-auto" navbar>
        {#each Object.entries(links) as [linkHref, linkName]}
            <NavItem>
                <NavLink sveltekit:prefetch href={linkHref}>{linkName}</NavLink>
            </NavItem>
        {/each}
      </Nav>
    </Collapse>
  </Navbar>
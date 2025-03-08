This ensures that both Web Components stay decoupled while the parent manages navigation. 
Now, create an Angular route guard (CanDeactivate) that checks the isFormDirty state before navigating away.
===
Alternative Approach: Direct Web Component Communication (Not Recommended)
You could also allow the two Web Components to directly communicate via Custom Events and Custom Properties (e.g., using document.querySelector). However, this approach has limitations:

The Web Components cannot control Angular’s Router directly.
Navigation guards cannot be easily integrated.
Maintaining multiple Web Components’ state becomes complex.
Thus, it’s better to let the parent app manage form state instead.


====
Final Recommendation ✅
Web Components should emit formDirty and formClean events.
Parent Angular App should listen to these events and track form state.
A CanDeactivate Guard should prevent navigation if forms are dirty.
💡 This ensures a scalable and maintainable solution while keeping the Web Components decoupled.

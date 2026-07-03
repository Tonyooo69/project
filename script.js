const form = document.getElementById('messageForm');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = new FormData(form);
            
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('Salamat sa message boss! Iwan ko kung mabasa ko yan.');
                form.reset();
            } else {
                alert('Oops! Nagka-problema sa pagpapadala.');
            }
        });
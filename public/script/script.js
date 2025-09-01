
 

  let remainingDays =remainingDays
  const upgradeBtnContainer = document.querySelector('.trial-btn');

  if (remainingDays <= 0) {
    upgradeBtnContainer.innerHTML = `
      <a href="/subscription/upgrade" class="btn btn-danger">
        🚀 Upgrade Now - Trial Expired
      </a>
    `;
  }


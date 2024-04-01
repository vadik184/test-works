const colorOptionList = document.querySelector(".color-option-list");
const colorChangeButton = document.querySelector(".color-change");

colorChangeButton.addEventListener("click", () => {
  //   colorOptionList.style.display = "grid";
  colorOptionList.classList.toggle("show-grid");
});

const addTask = document.querySelector(".add-btn");
const taskSection = document.querySelector(".task-section");

let cont = 0;

addTask.addEventListener("click", () => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("card-fild");
  taskDiv.innerHTML = `
      <ul class="card-list">
        <li class="card-item">
          <div class="task-card">
            <ul class="inside-card-list show show-grid">
              <li class="item-title title-color">
                <h3 class="task-title">Назва</h3>
                <div class="color-picker">
                  <button class="color-change"></button>
                  
                </div>
              </li>
              <li class="inside-text-fild">
                <p class="task-text">текст</p>
              </li>
              <li>
                <div class="btn-container">
                  <button type="button" class="edit-btn">
                    Редагувати
                  </button>
                  <button type="button" class="delete-btn">
                    Видалити
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    `;

  taskSection.appendChild(taskDiv);
});

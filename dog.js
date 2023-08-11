"use strict";

export { Dog };

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
            <div class="badges">
                <img id="like" class="badge hidden" src="/images/badge-like.png" />
                <img id="dislike" class="badge hidden" src="/images/badge-nope.png" />
            </div>
            <img class="dog-picture" alt="dog-picture" src=${avatar} />
            <div class="dog-info">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
            </div>
  `;
  }
}

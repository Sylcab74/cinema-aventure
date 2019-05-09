<template>
    <div class="register">
      <h2 class="page-title">Enregistrez un film</h2>
        <hr class="separator"/>
        <form method="post" action="?">
          <label for="title">Titre du film<span class="required"> *</span> : </label>
          <input id="title" type="text" placeholder="Titre du film" required/>
          <label for="year">Année de production<span class="required"> *</span> : </label>
          <input id="year" type="number" min="1900" max="2019" value="2000" required/>
          <label for="country">Pays d'origine <span class="required"> *</span> :</label>
          <input id="country" type="text" placeholder="Pays"/>
          <label for="language">Langue du film <span class="required"> *</span> :</label>
          <input id="language" type="text" placeholder="Langue"/>
          <label for="real">Réalisateur <span class="required"> *</span> :</label>
          <input id="real" type="text" placeholder="Réalisateur"/>
          <label for="society">Société de production <span class="required"> *</span> :</label>
          <input id="mon_id" type="text" placeholder="Société de production"/>
          <label for="resume">Résumé :</label>
          <textarea id="resume" name="resume" rows="5" cols="50">It was a dark and stormy night...</textarea>
          <input type="submit" value="Envoyer">
        </form>
    </div>
</template>

<script>

export default {
  name: 'MovieForm',
};
</script>


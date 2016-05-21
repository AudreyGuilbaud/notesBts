<div class="divGeneral">
    <div class="divMatiere">
        <div class="divTitre">
            <span>Matières générales <input type="text" name="moyenne_gen" id="moyenne_gen" class="moyennes" readonly></span>
            <img class="stylo" src="./images/styloplume.gif">
        </div>
        <div class="divForm">
            <?php include_once("vues/v_notesGenerales.php") ; ?>
        </div>
    </div>
    <div class="divMatiere">
        <div class="divTitre">
            <span>Matières techniques <input type="text" name="moyenne_tech" id="moyenne_tech" class="moyennes" readonly></span>
            <img class="crayon" src="./images/crayon.gif">
        </div>
        <div class="divForm">
            <?php include_once("vues/v_notesTechniques.php") ; ?>
        </div>
    </div>
    
</div>


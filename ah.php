<textarea id="chat" rows="20" cols="31"></textarea><br>
    <label>
        Username: <input type="text" id="username">
        Message: <input type="text" id="message">

    </label>
    <button id="send">Kirim</button>
    <script src="chat.js"></script>



    <?php
if (isset($_POST['username']) && isset($_POST['message'])) {
    $username = $_POST['username'];
    $message = $_POST['message'];

    // Format pesan: username : pesan
    $formattedMessage = $username . " : " . $message . "\n";

    // Menambahkan pesan ke dalam file chat.txt
    file_put_contents('chat.txt', $formattedMessage, FILE_APPEND | LOCK_EX);
}

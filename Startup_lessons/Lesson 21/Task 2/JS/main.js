let displayProperties = prompt('Display property')
switch(displayProperties){
    case "block":
        alert('block');
        break;
    case "flex":
        alert('flex');
        break;
    case "grid":
        alert("grid" );
        break;
    case "inline":
        alert('inline' );
        break;
    case "none":
        alert('none');
        break;
    default:
        alert("Set 'display:inline-block;'");
 }

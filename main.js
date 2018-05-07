let result = {
    q1: 'wrong',
    q2: 'wrong',
    q3: 'wrong',
    q4: 'wrong',
    q5: 'wrong',
    q6: 'wrong',
    q7: 'wrong'
}

$(document).ready(function() {
    $("#correct1").click(function() {
        result.q1 = 'correct'
        alert("That’s more than the space needle!")
        alert("Instead of throwing away all of your old clothes and shoes, you can recycle it instead!")
        alert("Our local partners first see if old clothes and shoes can still be worn. If that’s not possible, they will turn the materials into new things like insulation and other types of clothing!")
        $("#q1").hide()
        $("#q2").show()
    })
    $("#wrong1, #wrong11").click(function() {
        alert("WRONG")
        $("#q1").hide()
        $("#q2").show()
    })

    $("#correct2").click(function() {
        result.q2 = 'correct'
        alert("That’s more than three 747 airplanes!")
        alert("Instead of throwing away your plastic film, recycle it instead!")
        alert("Drop-off recycling for plastic film makes sure it doesn’t cause problems that can happen when it goes in your traditional bins. Instead, you can help turn it into decking material!")
        $("#q2").hide()
        $("#q3").show()
    })
    $("#wrong2, #wrong22").click(function() {
        alert("WRONG")
        $("#q2").hide()
        $("#q3").show()
    })

    $("#correct3").click(function() {
        result.q3 = 'correct'
        alert("That’s more than a locomotive!")
        alert("Instead of filling up your trash can with Styrofoam, you can recycle it locally!")
        alert("Our partner accepts two different kinds of styrofoam as well as peanuts! They heat it up and form it into blocks that are later turned into things like picture frames and molding.")
        $("#q3").hide()
        $("#q4").show()
    })
    $("#wrong3, #wrong33").click(function() {
        alert("WRONG")
        $("#q3").hide()
        $("#q4").show()
    })

    $("#correct4").click(function() {
        result.q4 = 'correct'
        alert("That’s more than this house weighs!")
        alert("Instead of sending your unused latex paint to a landfill, you can recycle it locally!")
        alert("Our partner will accept all colors and quantities and will mix it in with other things to be able to create new colors that are as good as new. They will also recycle the cans!")
        $("#q4").hide()
        $("#q5").show()
    })
    $("#wrong4, #wrong44").click(function() {
        alert("WRONG")
        $("#q4").hide()
        $("#q5").show()
    })

    $("#correct5").click(function() {
        result.q5 = 'correct'
        alert("That’s more than 8 cars!")
        alert("Instead of throwing batteries into the garbage, you can recycle them and keep them safe!")
        alert("Our partners make sure the chemicals from batteries don’t cause any damage to our environment. Even better, they can also recover metals they are made out of!")
        $("#q5").hide()
        $("#q6").show()
    })
    $("#wrong5, #wrong55").click(function() {
        alert("WRONG")
        $("#q5").hide()
        $("#q6").show()
    })

    $("#correct6").click(function() {
        result.q6 = 'correct'
        alert("That’s  more than the weight of 8k people!")
        alert("Don’t throw your old electronics in the trash! You can recycle them instead!")
        alert("Our local partners will find out which of your old electronics have some life in them. None left? They can take them apart and use the metals and glass in new things. Win/Win!")
        $("#q6").hide()
        $("#q7").show()
    })
    $("#wrong6, #wrong66").click(function() {
        alert("WRONG")
        $("#q6").hide()
        $("#q7").show()
    })

    $("#correct7").click(function() {
        result.q7 = 'correct'
        alert("That’s more than 8 elephants!")
        alert("Don’t throw your old light bulbs and tubes in the trash! That might even be illegal!")
        alert("CFL bulbs and tubes are especially dangerous. Make sure to recycle them. That prevents them from causing harm and the glass and metal can also be recycled.")
        $("#q7").hide()
        $("#result").text(
            result.q1 + ', ' + 
            result.q2 + ', ' +
            result.q3 + ', ' +
            result.q4 + ', ' +
            result.q5 + ', ' +
            result.q6 + ', ' +
            result.q7
        )
        $("#result").show()
    })
    $("#wrong7, #wrong77").click(function() {
        alert("WRONG")
        $("#q7").hide()
        $("#result").text(
            result.q1 + ', ' + 
            result.q2 + ', ' +
            result.q3 + ', ' +
            result.q4 + ', ' +
            result.q5 + ', ' +
            result.q6 + ', ' +
            result.q7
        )
        $("#result").show()
    })
})
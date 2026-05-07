/*

6.) Given the data below, output the data(Name and Age) of the person with
    the highest number of skillset. A dynamic code should be created.
    Output:Name: Patrick
    Age: 22

    Data:
    var record = [{ "Name":"Gibo", 
                    "Age": 16,
                    "SkillSet" : [{ "Skill":"SAP UI5"  },
                                  { "Skill":"SAP HANA" }]
                  },
                  { "Name":"Patrick",
                    "Age":22,
                    "SkillSet" : [{ "Skill":"SAP UI5"  }, 
                                  { "Skill":"SAP HANA" }, 
                                  { "Skill":"SAP ABAP" }]
                  }, 
                  { "Name":"MJ",
                    "Age":24,
                    "SkillSet" : [{ "Skill":"SAP HANA" }]
                }];

*/

// Approach use forEach to check each person and compare their skillset count then display the highest.

//Object values
var person = [{ "Name":"Gibo", 
                    "Age": 16,
                    "SkillSet" : [{ "Skill":"SAP UI5"  },
                                  { "Skill":"SAP HANA" }]
                  },
                  { "Name":"Patrick",
                    "Age":22,
                    "SkillSet" : [{ "Skill":"SAP UI5"  }, 
                                  { "Skill":"SAP HANA" }, 
                                  { "Skill":"SAP ABAP" }]
                  }, 
                  { "Name":"MJ",
                    "Age":24,
                    "SkillSet" : [{ "Skill":"SAP HANA" }]
                }];

//initialize 
var highestRecord = null;

//loop per person to check each skillset
person.forEach(function(personSkill) {

    // check if current person has more skills than the one before, if equally high, would get the first one
    if (highestRecord === null|| personSkill.SkillSet.length > highestRecord.SkillSet.length) 
    {   highestRecord = personSkill;    }

});

console.log("Name: " + highestRecord.Name);
console.log("Age: " + highestRecord.Age);

// ===== STAGE DATA =====
const stageData = {
  first: {
    title: "First Trimester (1–3 months)",
    desc: "The first trimester is a time of rapid development. Your body is adjusting to pregnancy, and you may experience morning sickness and fatigue.",
    categories: {
      emotional: {
        dos: [
          "Share your feelings with your partner or a trusted friend",
          "Join a pregnancy support group for shared experiences",
          "Practice mindfulness and gentle breathing exercises",
          "Keep a journal to process your emotions",
          "Celebrate small milestones in your pregnancy"
        ],
        donts: [
          "Don't bottle up anxiety or fear — talk to someone",
          "Don't compare your pregnancy journey to others",
          "Don't stress over every symptom — most are normal",
          "Don't isolate yourself from your support network",
          "Don't ignore signs of prenatal depression"
        ]
      },
      rest: {
        dos: [
          "Aim for 8-9 hours of sleep per night",
          "Take short naps during the day when tired",
          "Use a pregnancy pillow for better comfort",
          "Create a consistent sleep schedule",
          "Rest whenever your body signals fatigue"
        ],
        donts: [
          "Don't sleep flat on your back for long periods",
          "Don't push through extreme exhaustion",
          "Don't use sleep aids without doctor approval",
          "Don't drink caffeine close to bedtime",
          "Don't ignore persistent insomnia — consult your doctor"
        ]
      },
      nutrition: {
        dos: [
          "Take prenatal vitamins with folic acid daily",
          "Eat small, frequent meals to combat nausea",
          "Stay well hydrated — aim for 8-10 glasses of water",
          "Eat foods rich in iron and calcium",
          "Include folate-rich foods like leafy greens"
        ],
        donts: [
          "Don't skip meals even if nausea is severe",
          "Don't consume raw or undercooked meat or eggs",
          "Don't eat unpasteurized dairy or soft cheeses",
          "Don't exceed 200mg of caffeine daily",
          "Don't eat high-mercury fish like shark or swordfish"
        ]
      },
      physical: {
        dos: [
          "Walk for 20–30 minutes most days",
          "Try prenatal yoga or gentle stretching",
          "Swim or do water aerobics for low-impact exercise",
          "Listen to your body and rest when needed",
          "Consult your doctor before starting new workouts"
        ],
        donts: [
          "Don't do high-impact or contact sports",
          "Don't exercise in hot or humid conditions",
          "Don't hold your breath during exercise",
          "Don't lie flat on your back after week 12",
          "Don't ignore dizziness or shortness of breath"
        ]
      },
      medical: {
        dos: [
          "Attend your first prenatal appointment",
          "Wash hands frequently to prevent infections",
          "Use seatbelts properly (below the belly)",
          "Inform healthcare providers about pregnancy",
          "Keep emergency contact numbers handy"
        ],
        donts: [
          "Don't take hot baths or use saunas (over 101°F)",
          "Avoid handling cat litter (toxoplasmosis risk)",
          "Don't take medications without consulting your doctor",
          "Avoid exposure to harmful chemicals or fumes",
          "Don't ignore warning signs like severe pain or bleeding"
        ]
      },
      safety: {
        dos: [
          "Avoid smoking and secondhand smoke",
          "Wear your seatbelt properly at all times",
          "Use safe, pregnancy-approved cleaning products",
          "Ensure your home is free of fall hazards",
          "Follow food safety guidelines strictly"
        ],
        donts: [
          "Don't drink any alcohol — no amount is safe",
          "Don't use recreational drugs or substances",
          "Don't take over-the-counter meds without approval",
          "Don't use hot tubs or steam rooms",
          "Don't ignore workplace chemical exposures"
        ]
      }
    }
  },
  second: {
    title: "Second Trimester (4–6 months)",
    desc: "The second trimester is often the most comfortable phase. Morning sickness typically eases, your energy returns, and your baby bump begins to show.",
    categories: {
      emotional: {
        dos: [
          "Bond with your baby through talking and music",
          "Attend prenatal classes with your partner",
          "Plan and prepare the nursery — it's exciting!",
          "Discuss parenting values with your partner",
          "Stay socially connected with friends and family"
        ],
        donts: [
          "Don't let pregnancy anxiety go unaddressed",
          "Don't ignore mood swings — they're hormonal and normal",
          "Don't stress about body image changes",
          "Don't take on excessive work stress",
          "Don't skip mental wellness check-ins"
        ]
      },
      rest: {
        dos: [
          "Sleep on your left side for best circulation",
          "Use pillows to support your belly and back",
          "Take short rest breaks during the day",
          "Follow a relaxing bedtime routine",
          "Stay hydrated to avoid nighttime leg cramps"
        ],
        donts: [
          "Don't sleep on your stomach as belly grows",
          "Don't ignore leg cramps — stretch gently",
          "Don't use electric blankets near your abdomen",
          "Don't work through fatigue without breaks",
          "Don't nap too late in the day to preserve nighttime sleep"
        ]
      },
      nutrition: {
        dos: [
          "Increase calorie intake by ~300 calories/day",
          "Eat calcium-rich foods for baby's bone development",
          "Continue prenatal vitamins every day",
          "Add omega-3 rich foods like salmon (cooked)",
          "Eat fiber-rich foods to prevent constipation"
        ],
        donts: [
          "Don't skip iron-rich meals — anemia risk rises",
          "Don't eat large heavy meals before bed",
          "Don't ignore heartburn — adjust your diet",
          "Don't consume raw sprouts or deli meats",
          "Don't over-rely on processed foods for calories"
        ]
      },
      physical: {
        dos: [
          "Continue walking and swimming regularly",
          "Do prenatal Pilates for core strengthening",
          "Practice Kegel exercises daily",
          "Stay active but don't overexert yourself",
          "Exercise 3–5 times a week for 30 minutes"
        ],
        donts: [
          "Don't do exercises that strain your abdomen",
          "Don't participate in sports with fall risk",
          "Don't do heavy lifting without proper form",
          "Don't exercise to the point of exhaustion",
          "Don't skip warm-up and cool-down routines"
        ]
      },
      medical: {
        dos: [
          "Schedule and attend your anatomy ultrasound",
          "Discuss genetic testing results with your doctor",
          "Monitor and report any unusual symptoms",
          "Stay current on all prenatal screenings",
          "Discuss birth plan options with your provider"
        ],
        donts: [
          "Don't miss mid-pregnancy check-up appointments",
          "Don't ignore reduced fetal movement",
          "Don't delay reporting bleeding or cramping",
          "Don't self-treat urinary tract infections",
          "Don't skip glucose screening tests"
        ]
      },
      safety: {
        dos: [
          "Use sunscreen daily — skin is more sensitive now",
          "Wear comfortable, supportive footwear",
          "Keep home surfaces slip-free and safe",
          "Stay cool and avoid overheating",
          "Use safe, pregnancy-approved personal care products"
        ],
        donts: [
          "Don't travel to high-altitude areas without medical advice",
          "Don't use strong chemical hair treatments",
          "Don't skip prenatal check-ups abroad while traveling",
          "Don't use X-ray without informing your dentist/doctor",
          "Don't ignore signs of preterm labor (contractions, fluid)"
        ]
      }
    }
  },
  third: {
    title: "Third Trimester (7–9 months)",
    desc: "The final stretch! Your baby is growing rapidly and preparing for birth. Focus on rest, birth preparation, and staying in close contact with your provider.",
    categories: {
      emotional: {
        dos: [
          "Finalize your birth plan and discuss it with your doctor",
          "Practice relaxation techniques for labor",
          "Stay positive and trust your body's ability",
          "Connect with other expectant mothers",
          "Prepare mentally for the postpartum period"
        ],
        donts: [
          "Don't let birth anxiety overwhelm you — seek support",
          "Don't ignore signs of prenatal anxiety or depression",
          "Don't stress about labor pain — you can manage it",
          "Don't isolate yourself as your due date approaches",
          "Don't compare your birth plan to others"
        ]
      },
      rest: {
        dos: [
          "Prioritize rest as your body works harder",
          "Sleep on your left side for optimal blood flow",
          "Use extra pillows for comfort support",
          "Take short naps when sleep is interrupted",
          "Reduce evening activities to improve sleep"
        ],
        donts: [
          "Don't overexert yourself with last-minute preparations",
          "Don't ignore shortness of breath at rest — report it",
          "Don't sleep on your back — it can restrict blood flow",
          "Don't skip rest due to anxiety about birth",
          "Don't continue heavy physical tasks late in pregnancy"
        ]
      },
      nutrition: {
        dos: [
          "Eat smaller, more frequent meals to reduce discomfort",
          "Focus on iron and protein for labor preparation",
          "Stay hydrated to prevent Braxton Hicks contractions",
          "Eat vitamin-K rich foods for healthy blood clotting",
          "Include easily digestible, light meals"
        ],
        donts: [
          "Don't eat large meals — they worsen heartburn",
          "Don't restrict calories unnecessarily",
          "Don't consume excessive sodium — it causes swelling",
          "Don't drink excessive water at once — small sips are better",
          "Don't stop prenatal vitamins until after delivery"
        ]
      },
      physical: {
        dos: [
          "Walk regularly to encourage baby's positioning",
          "Do gentle stretches to ease back pain",
          "Practice breathing exercises for labor",
          "Attend prenatal yoga classes if available",
          "Rest more as your due date approaches"
        ],
        donts: [
          "Don't do strenuous exercise after 36 weeks",
          "Don't ignore pelvic pressure or pelvic pain",
          "Don't stand or sit in one position too long",
          "Don't do any exercises flat on your back",
          "Don't exercise through contractions or pain"
        ]
      },
      medical: {
        dos: [
          "Attend weekly check-ups after 36 weeks",
          "Pack your hospital bag by week 35",
          "Know the signs of labor and when to go in",
          "Discuss pain management options with your provider",
          "Do kick counts daily and report concerns"
        ],
        donts: [
          "Don't ignore decreased fetal movement",
          "Don't wait too long to go to the hospital in labor",
          "Don't miss Group B Strep screening",
          "Don't take aspirin or NSAIDs without approval",
          "Don't skip postpartum planning discussions"
        ]
      },
      safety: {
        dos: [
          "Have your hospital route planned and ready",
          "Keep your phone charged at all times",
          "Install car seat properly before due date",
          "Know the warning signs of preeclampsia",
          "Stay close to home after 36 weeks"
        ],
        donts: [
          "Don't travel far from your birthing location after 36 weeks",
          "Don't lift heavy objects",
          "Don't ignore sudden severe headaches or vision changes",
          "Don't skip emergency contact preparations",
          "Don't overexert during the final weeks"
        ]
      }
    }
  },
  postpartum: {
    title: "Postpartum (After Birth)",
    desc: "The postpartum period is a time of healing, bonding, and significant change. Take care of yourself while caring for your newborn.",
    categories: {
      emotional: {
        dos: [
          "Accept help from family and friends",
          "Talk openly about baby blues or postpartum feelings",
          "Bond with your baby through skin-to-skin contact",
          "Seek professional help if you feel depressed",
          "Be patient — emotional adjustment takes time"
        ],
        donts: [
          "Don't ignore signs of postpartum depression",
          "Don't try to be a 'perfect' parent immediately",
          "Don't isolate yourself during the postpartum period",
          "Don't compare your recovery to others",
          "Don't dismiss feelings of overwhelm or sadness"
        ]
      },
      rest: {
        dos: [
          "Sleep when the baby sleeps whenever possible",
          "Accept offers to help with night feeds",
          "Rest as much as possible in the first 6 weeks",
          "Ask your partner to share nighttime duties",
          "Create a supportive sleep environment"
        ],
        donts: [
          "Don't try to do everything yourself",
          "Don't push through severe exhaustion",
          "Don't neglect your own sleep for non-essential tasks",
          "Don't skip postpartum doctor visits",
          "Don't use sleep aids without medical advice"
        ]
      },
      nutrition: {
        dos: [
          "Continue prenatal vitamins postpartum",
          "Eat nutritious, calorie-rich foods if breastfeeding",
          "Stay well hydrated — especially while nursing",
          "Eat plenty of protein for tissue healing",
          "Include iron-rich foods to restore levels after delivery"
        ],
        donts: [
          "Don't crash diet while breastfeeding",
          "Don't restrict calories severely in early postpartum",
          "Don't skip meals — your body needs fuel to heal",
          "Don't drink alcohol while breastfeeding",
          "Don't ignore hunger signals"
        ]
      },
      physical: {
        dos: [
          "Start with gentle walking after delivery",
          "Do pelvic floor exercises (Kegels) daily",
          "Wait for doctor's clearance before more exercise",
          "Gradually resume activity after 6 weeks",
          "Listen to your body's recovery signals"
        ],
        donts: [
          "Don't rush into intense exercise before healing",
          "Don't lift heavy items before 6-week clearance",
          "Don't ignore pain during activity",
          "Don't skip your 6-week postpartum check-up",
          "Don't do sit-ups if you have diastasis recti"
        ]
      },
      medical: {
        dos: [
          "Attend your 6-week postpartum check-up",
          "Monitor your incision or episiotomy for healing",
          "Report heavy bleeding or signs of infection",
          "Discuss contraception options with your provider",
          "Keep all baby's scheduled pediatric appointments"
        ],
        donts: [
          "Don't ignore signs of postpartum infection",
          "Don't delay seeking help for postpartum depression",
          "Don't skip your follow-up appointments",
          "Don't use tampons until cleared by your doctor",
          "Don't engage in sexual activity before 6-week clearance"
        ]
      },
      safety: {
        dos: [
          "Always place baby on their back to sleep",
          "Use a firm, flat sleep surface for your baby",
          "Keep baby's crib free of loose bedding and toys",
          "Ensure proper car seat installation before leaving hospital",
          "Wash hands before handling the newborn"
        ],
        donts: [
          "Don't co-sleep on soft surfaces with your baby",
          "Don't leave baby unattended on raised surfaces",
          "Don't drive if you haven't slept — it's dangerous",
          "Don't expose newborn to smoke or ill visitors",
          "Don't shake or roughly handle the baby"
        ]
      }
    }
  }
};

// ===== SEARCH DATA =====
const searchAnswers = [
  {
    keywords: ["coffee", "caffeine"],
    answer: "Limit caffeine to 200mg per day during pregnancy. One cup of coffee (approx. 100–140mg) is generally considered safe. Opt for decaf when possible and avoid energy drinks."
  },
  {
    keywords: ["exercise", "workout", "gym", "walk", "swimming", "yoga", "safe"],
    answer: "Most moderate exercise is safe during pregnancy! Walking, swimming, prenatal yoga, and Pilates are excellent choices. Avoid contact sports, high-impact activities, and exercises that risk falling. Always consult your provider before starting a new routine."
  },
  {
    keywords: ["fish", "seafood", "sushi", "tuna", "salmon"],
    answer: "Cooked fish is generally safe and nutritious during pregnancy. Avoid high-mercury fish like shark, swordfish, king mackerel, and tilefish. Limit canned albacore tuna to 6oz/week. Avoid raw sushi and raw shellfish due to bacterial and parasitic risks."
  },
  {
    keywords: ["water", "hydration", "drink", "fluid"],
    answer: "Aim for 8–10 glasses (2–2.5 liters) of water per day during pregnancy. Staying hydrated helps prevent urinary tract infections, reduces constipation, and supports healthy amniotic fluid levels. Increase intake during hot weather or exercise."
  },
  {
    keywords: ["travel", "fly", "airplane", "flight", "trip", "vacation"],
    answer: "Air travel is generally safe until 36 weeks for uncomplicated pregnancies. Stay hydrated, walk the aisle every hour, and wear compression socks. Avoid travel after 36 weeks. Always check with your airline's policies and consult your provider before any trip."
  },
  {
    keywords: ["morning sickness", "nausea", "vomiting", "sick"],
    answer: "Morning sickness is very common in the first trimester. Try eating small, frequent meals, avoiding strong smells, and snacking on dry crackers or ginger biscuits. Stay hydrated with small sips. If vomiting is severe or persistent, contact your provider — you may need treatment for hyperemesis gravidarum."
  },
  {
    keywords: ["alcohol", "wine", "beer", "drink"],
    answer: "There is no known safe amount of alcohol during pregnancy. Alcohol passes directly to your baby and can cause fetal alcohol spectrum disorders. Complete abstinence from alcohol is strongly recommended throughout all stages of pregnancy."
  },
  {
    keywords: ["sleep", "sleeping", "insomnia", "tired", "rest"],
    answer: "Sleep on your left side, especially in the second and third trimester, to optimize blood flow. Use pillows between your knees and under your belly for support. Establish a calming bedtime routine and limit caffeine after noon. If insomnia is severe, discuss safe remedies with your provider."
  },
  {
    keywords: ["medication", "medicine", "drug", "painkiller", "ibuprofen", "aspirin", "paracetamol", "tylenol"],
    answer: "Always consult your healthcare provider before taking any medication during pregnancy. Paracetamol/Acetaminophen is generally considered safe at recommended doses. Ibuprofen, aspirin, and NSAIDs should be avoided unless prescribed. Never self-medicate with over-the-counter or prescription drugs."
  },
  {
    keywords: ["weight", "gain", "fat", "obese"],
    answer: "Healthy weight gain during pregnancy depends on your pre-pregnancy BMI. Generally: 25-35 lbs (normal BMI), 28-40 lbs (underweight), 15-25 lbs (overweight). Don't try to lose weight during pregnancy. Focus on nutritious eating rather than strict calorie counting."
  },
  {
    keywords: ["back pain", "backache", "back ache"],
    answer: "Back pain is very common in pregnancy. Practice good posture, wear supportive footwear, use a pregnancy pillow at night, and do gentle stretches. Prenatal yoga and swimming can help. Avoid heavy lifting. If pain is severe or radiates to your legs, contact your provider."
  },
  {
    keywords: ["cat", "pet", "litter", "toxoplasmosis"],
    answer: "Avoid cleaning cat litter boxes during pregnancy due to the risk of toxoplasmosis infection. If you must, wear gloves and wash hands thoroughly. You can still keep and pet your cat safely. Ask someone else to handle litter box duties throughout your pregnancy."
  }
];

// ===== STATE =====
let currentStage = null;
let currentCategory = null;

// ===== NAVIGATION =====
function showHome() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-home').classList.add('active');
  window.scrollTo(0, 0);
}

function showGuidancePage() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-guidance').classList.add('active');
  window.scrollTo(0, 0);
}

function showStagePage(stage) {
  currentStage = stage;
  currentCategory = null;

  const data = stageData[stage];
  document.getElementById('stage-title').textContent = data.title;
  document.getElementById('stage-desc').textContent = data.desc;

  // Reset category state
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('category-empty').style.display = 'block';
  document.getElementById('dos-donts').style.display = 'none';

  // Clear search
  document.getElementById('search-input').value = '';
  const sr = document.getElementById('search-result');
  sr.style.display = 'none';
  sr.textContent = '';
  sr.className = 'search-result';

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-stage').classList.add('active');
  window.scrollTo(0, 0);
}

// ===== CATEGORY SELECTION =====
function selectCategory(cat) {
  currentCategory = cat;

  // Update active button
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });

  const data = stageData[currentStage].categories[cat];

  // Populate Do's
  const dosList = document.getElementById('dos-list');
  dosList.innerHTML = data.dos.map(item => `<li>${item}</li>`).join('');

  // Populate Don'ts
  const dontsList = document.getElementById('donts-list');
  dontsList.innerHTML = data.donts.map(item => `<li>${item}</li>`).join('');

  // Show panels, hide empty state
  document.getElementById('category-empty').style.display = 'none';
  document.getElementById('dos-donts').style.display = 'grid';

  // Content updates in place — no scroll position change
}

// ===== SEARCH =====
function setSearch(text) {
  document.getElementById('search-input').value = text;
  doSearch();
}

function doSearch() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  const resultEl = document.getElementById('search-result');

  if (!query) {
    resultEl.style.display = 'none';
    return;
  }

  let matched = null;
  for (const entry of searchAnswers) {
    if (entry.keywords.some(kw => query.includes(kw))) {
      matched = entry;
      break;
    }
  }

  resultEl.style.display = 'block';

  if (matched) {
    resultEl.className = 'search-result';
    resultEl.innerHTML = `<strong>Answer:</strong> ${matched.answer}`;
  } else {
    resultEl.className = 'search-result no-result';
    resultEl.textContent = 'No results found. Try another question or consult your healthcare provider.';
  }

}

export const infoStr = {
    userName: {
        title: 'Tôi có thể gọi bạn là gì?',
        input: {
            placeholder: 'Nhập tên của bạn',
        }
    },
    otherInfo: {
        title: 'Hãy cho tôi biết một chút về bản thân của bạn nhé!',
        des: 'Các thông tin dưới đây rất hữu ích trong việc tính toán lượng calo cho bạn đó.',
        subTitles: {
            birthday: 'Ngày tháng năm sinh của bạn là:',
            gender: 'Giới tính:',
            country: 'Quốc gia bạn sinh sống:'
        },
        error: 'Fissly rất tiếc chưa thể đồng hành cùng bạn, vì bạn chưa đủ 16 tuổi trở lên.',
        genderLabel: {
            male: 'Nam',
            female: 'Nữ',
        },
    },
    userHealthGoals: {
        title: 'Mục tiêu của bạn là gì?',
        des: 'Hãy để Fissly là người bạn đồng hành lên mục tiêu cho bạn nhé!',
        goals: [
            'Giảm cân',
            'Duy trì cân nặng',
            'Tăng cân',
            'Tăng cơ bắp đầy đặn',
            'Quản lý chế độ ăn uống',
            'Duy trì chế độ ăn uống lành mạnh',
            'Rèn luyện sức khoẻ',
            'Lên kế hoạch cho bản thân',
        ],
    },
    healthPlan: {
        title: 'Bạn có thường xuyên lên kế hoạch cho bản thân ?',
        des: 'Fissly sẽ hỗ trợ lên kế hoạch cho bạn bất kể là ở đâu nhé!',
        plans: [
            'Không bao giờ',
            'Một vài lần',
            'Thỉnh thoảng',
            'Thường xuyên',
            'Luôn luôn',
        ],
    },
    habit: {
        title: 'Những thói quen lành mạnh nào khiến bạn trân trọng?',
        des: 'Thói quen là một giải pháp giúp bạn cải thiện sức khoẻ.',
        habits: [
            'Ăn nhiều protein',
            'Tập thể dục mỗi ngày',
            'Ngủ đủ giấc',
            'Giữ tinh thần tích cực',
            'Ăn nhiều rau củ',
            'Thiền và hít thở sâu',
            'Khám sức khoẻ định kỳ',
            'Ăn uống có ý thức',
            'Theo dõi calo bản thân',
            'Theo dõi macro bản thân',
            'Theo dõi các chất dinh dưỡng',
            'Lập kế hoạch cho bữa ăn',
            'Tôi không biết',
            'Tôi không có thói quen lành mạnh',
        ],
    },
    weightAndHeight: {
        title: 'Cân nặng và chiều cao của bạn là bao nhiêu?',
        des: 'Fissly sẽ tính toán BMI dựa trên thông tin mà bạn cung cấp.',
        input: {
            height: 'Nhập chiều cao',
            weight: 'Nhập cân nặng',
        },
        unit: {
            height: {
                cm: 'cm',
                ft: 'ft',
            },
            weight: {
                kg: 'kg',
                lb: 'lb',
            },
        },
        bmiCard: {
            title: 'BMI của bạn là: ',
            message: {
                underWeight: "Bạn đang thiếu cân rồi đấy! Hãy bổ sung thêm dinh dưỡng và tăng cường bữa ăn mỗi ngày để cơ thể khoẻ mạnh và tràn đầy năng lượng nhé!",
                healthyWeight: "Cơ thể bạn đang trong trạng thái cân đối và khoẻ mạnh! Hãy tiếp tục duy trì chế độ ăn uống và luyện tập hiện tại nhé!",
                overWeight: "Bạn đang ở trạng thái thừa cân một chút! Hãy tăng cường vận động và lựa chọn thực phẩm lành mạnh để đạt vóc dáng lý tưởng nhé!",
                obese: "Cơ thể bạn đang ở mức béo phì cấp độ I. Đừng lo nhé! Chỉ cần duy trì tập luyện đều đặn và điều chỉnh chế độ ăn uống, bạn sẽ sớm đạt cân nặng mong muốn!",
                severelyObese: "Cơ thể bạn đang ở mức béo phì cấp độ II. Hãy bắt đầu thay đổi từng bước nhỏ như đi bộ thường xuyên, ăn nhiều rau xanh và ngủ đủ giấc — kết quả sẽ đến sớm thôi!",
                morbidlyObese: "Cơ thể bạn đang ở mức béo phì cấp độ III. Đừng nản lòng nhé! Việc kết hợp chế độ dinh dưỡng hợp lý và luyện tập kiên trì sẽ giúp bạn cải thiện sức khỏe mỗi ngày!",
            },
        },
    },
    weeklyGoals: {
        title: 'Mục tiêu hàng tuần của bạn là gì?',
        des: 'Hãy cho Fissly biết mục tiêu hàng tuần của bạn như thế nào nhé!',
        goals: [
            'Giảm 0.25 kg mỗi tuần',
            'Giảm 0.5 kg mỗi tuần',
            'Giảm 0.75 kg mỗi tuần',
            'Giảm 1 kg mỗi tuần',
            'Tăng 0.25 kg mỗi tuần',
            'Tăng 0.5 kg mỗi tuần',
            'Tăng 0.75 kg mỗi tuần',
            'Tăng 1 kg mỗi tuần',
            'Duy trì cân nặng của tôi',
        ],
    },
    minHeight: 'Người thấp nhất (người trưởng thành) được Guinness ghi nhận là Gul Mohammed, với chiều cao khoảng 57 cm (khoảng 1.9 ft).',
    maxHeight: 'Người cao nhất được Guinness ghi nhận là Sultan Kösen, với chiều cao khoảng 251 cm (khoảng 8.2 ft).',
    minWeight: 'Người nhẹ nhất (người trưởng thành) được Guinness ghi nhận là Lucía Zárate, với trọng lượng khoảng 2.1 kg (khoảng 4.7 lb) khi 17 tuổi.',
    maxWeight: 'Người nặng nhất từng được Guinness ghi nhận là Jon Brower Minnoch, với trọng lượng khoảng 635 kg (khoảng 1.400 lb).',
    happy: 'Cảm ơn bạn đã tin tưởng Fissly!',
    desHappy: 'Hành trình và kế hoạch của bạn đã sẵn sàng. Hãy cố gắng lên nhé!',
    paraHappy1: 'Fissly đã ước tính được lượng calo hàng ngày cho bạn để bạn có thể theo dõi bản thân.',
    calOnDate: 'Calo/ngày',
    calOnWeek: 'Calo/tuần',
    paraHappy2: 'Cân nặng và chiều cao của bạn sẽ cho bạn biết TDEE cần nạp trong 1 ngày',
    tdeeOnDate: 'TDEE cần nạp trong một ngày của bạn',
};
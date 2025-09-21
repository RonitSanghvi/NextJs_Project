import { Card, CardContent } from "../components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b2e] mb-4">
            About Our Temple
          </h2>
          <p className="text-lg text-[#6b4c57] max-w-3xl mx-auto">
            Shree Simandhar Swami Digambar Jain Mandir, located in the heart of <b className="text-[#ea5c95]">Paldi, Ahmedabad</b>, is a sacred place of devotion and spiritual learning. The temple stands as a center of faith for Jain devotees and seekers of truth. With its serene atmosphere, daily rituals, and regular pravachans, the mandir guides devotees on the path of self-realization and non-violence.
          </p>
          <p className="text-lg text-[#6b4c57] max-w-3xl mx-auto mt-4">
            The temple is dedicated to <b className="text-[#ea5c95]"> Shree Simandhar Swami </b>, a Tirthankar believed to be living in Mahavideh Kshetra, who continues to enlighten souls on the path of liberation. The mandir is not only a place of worship but also a center for spiritual education, community gatherings, and spreading the eternal principles of Jain dharma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-[#f9b0c8] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#ea5c95] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🕉️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2d1b2e] mb-3">Spiritual Practice</h3>
              <p className="text-[#6b4c57]">
                Daily prayers, meditation sessions, and spiritual discourses to guide devotees 
                on the path of righteousness and inner peace.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#f9b0c8] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#5abab6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2d1b2e] mb-3">Community Service</h3>
              <p className="text-[#6b4c57]">
                Dedicated to serving the community through charitable activities, education, 
                and promoting the values of compassion and non-violence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#f9b0c8] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#ea5c95] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2d1b2e] mb-3">Learning & Education</h3>
              <p className="text-[#6b4c57]">
                Study circles, scripture reading sessions, and educational programs to deepen 
                understanding of Jain philosophy and principles.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-[#ffe3f3] to-[#f9b0c8]/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2d1b2e] mb-6">
                Temple History
              </h3>
              <p className="text-[#6b4c57] mb-4 leading-relaxed">
                The foundation of the temple was laid nearly 45 years ago, with the vision of creating a sacred space for devotion and community gathering. What began as a modest shrine soon became a spiritual home for many.
                After five years, the temple acquired the land next to it and expanded to more than double its original size. This joyous occasion was marked with a three-day Pratishtha Mahotsav, where devotees came together in devotion and celebration.
              </p>
              <p className="text-[#6b4c57] mb-6 leading-relaxed">
                Another five years later, in 1988, the temple reached a new milestone with the addition of a second floor and the installation of more idols. This occasion was celebrated in grandeur with a five-day Panchkalyanak Pratishtha Mahotsav, filling the atmosphere with sacred rituals, cultural programs, and deep spiritual energy.
                Through these milestones, the temple has continued to grow — not just in size, but in its role as a beacon of faith, unity, and Jain tradition, inspiring generations of devotees.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                  <span className="text-[#ea5c95] font-semibold">विक्रम संवत</span>
                  <span className="text-[#2d1b2e] ml-2">2036</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                  <span className="text-[#ea5c95] font-semibold">वीर संवत</span>
                  <span className="text-[#2d1b2e] ml-2">2506</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <h4 className="text-2xl font-bold text-[#ea5c95] mb-2">आहिंसा</h4>
                <p className="text-[#6b4c57]">Non-violence</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <h4 className="text-2xl font-bold text-[#5abab6] mb-2">सत्य</h4>
                <p className="text-[#6b4c57]">Truth</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <h4 className="text-2xl font-bold text-[#ea5c95] mb-2">अस्तेय</h4>
                <p className="text-[#6b4c57]">Non-stealing</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <h4 className="text-2xl font-bold text-[#5abab6] mb-2">ब्रह्मचर्य</h4>
                <p className="text-[#6b4c57]">Celibacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
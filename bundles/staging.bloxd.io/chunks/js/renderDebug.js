export const id = 47;
export const ids = [47];
export const modules = {
  4466: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(2707);
    const Ju = 3e4,
      Nu = 1e3;

    function Xu() {
      return "visible" === document.visibilityState && "inGame" === Eu.d.get("gameState") && (0, Qu.r)()
    }

    function Vu(uu, Ru) {
      (0, mu.p)() || function(uu, Ru, yu) {
        let Eu = 0;
        const Ku = setInterval((() => {
          Ru() && (Eu += Nu, Eu >= uu && (clearInterval(Ku), yu()))
        }), Nu)
      }(Ju, Xu, (() => {
        Ru().then((() => {
          uu(`saved for the player after ${Ju/1e3} s of play`), (0, mu.w)(), Ku.k.Op("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  4464: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      installRenderDebug: () => ry,
      renderDebugPlayable: () => xy,
      startRenderDebug: () => By,
      waitForDraw: () => Sy
    });
    var Eu = yu(1731),
      Ku = yu(4466),
      Qu = yu(2707);
    const mu = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Ju(uu) {
      return 7 & uu
    }

    function Nu(uu) {
      return uu >>> 11 & 1
    }

    function Xu(uu) {
      return [1 + (uu >>> 18 & 63), 1 + (uu >>> 24 & 63)]
    }

    function Vu(uu, Ru) {
      const [yu, , Eu] = uu, Ku = Ju(Eu), Qu = function(uu, Ru, yu) {
        return Ru + (1 === (22 >>> uu & 1) ? 4 - yu : yu) & 3
      }(Ku, Nu(Eu), Ru), mu = Ku >>> 1, [Vu, ru] = Xu(yu), Bu = 1 === Qu || 2 === Qu ? Vu : 0, xu = Qu >= 2 ? ru : 0, Su = [63 & yu, yu >>> 6 & 63, yu >>> 12 & 63];
      return Su[2 === mu ? 0 : 2] += Bu, Su[1 === mu ? 0 : 1] += xu, Su
    }

    function ru(uu) {
      const Ru = Math.max(...Xu(uu[0]));
      return 1 === Ru ? "1" : Ru <= 4 ? "2-4" : Ru <= 16 ? "5-16" : "17-64"
    }
    const Bu = 16;

    function xu(uu) {
      let Ru = 2166136261;
      for (let yu = 0; yu < uu.length; yu++) Ru = Math.imul(Ru ^ uu[yu], 16777619);
      return Ru >>> 0
    }

    function Su(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Eu = Math.max(0, Ru - yu),
        Ku = Math.min(uu.length, Ru + yu),
        Qu = [];
      for (let mu = Eu; mu < Ku; mu++) {
        const yu = uu[mu].toString(16).padStart(2, "0");
        Qu.push(mu === Ru ? `[${yu}]` : yu)
      }
      return Qu.join(" ")
    }
    const pu = {
        NO_ERROR: 0,
        POINTS: 0,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        COPY_READ_BUFFER: 36662,
        COPY_WRITE_BUFFER: 36663,
        COPY_READ_BUFFER_BINDING: 36662,
        COPY_WRITE_BUFFER_BINDING: 36663,
        UNIFORM_BUFFER: 35345,
        UNIFORM_BUFFER_BINDING: 35368,
        PIXEL_UNPACK_BUFFER: 35052,
        PIXEL_UNPACK_BUFFER_BINDING: 35055,
        TRANSFORM_FEEDBACK_BUFFER: 35982,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
        TRANSFORM_FEEDBACK: 36386,
        TRANSFORM_FEEDBACK_BINDING: 36389,
        INTERLEAVED_ATTRIBS: 35980,
        RASTERIZER_DISCARD: 35977,
        STREAM_READ: 35041,
        CURRENT_PROGRAM: 35725,
        LINK_STATUS: 35714,
        VERTEX_SHADER: 35633,
        FRAGMENT_SHADER: 35632,
        DEPTH_FUNC: 2932,
        DEPTH_CLEAR_VALUE: 2931,
        SAMPLES: 32937,
        DRAW_FRAMEBUFFER: 36009,
        DEPTH_ATTACHMENT: 36096,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
        DRAW_FRAMEBUFFER_BINDING: 36006,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_UNIFORM_BLOCKS: 35382,
        UNIFORM_BLOCK_BINDING: 35391,
        UNIFORM_BLOCK_INDEX: 35386,
        INVALID_INDEX: 4294967295,
        MAX_VERTEX_ATTRIBS: 34921,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
        CURRENT_VERTEX_ATTRIB: 34342,
        TEXTURE_2D: 3553,
        TEXTURE0: 33984,
        ACTIVE_TEXTURE: 34016,
        TEXTURE_BINDING_2D: 32873,
        READ_FRAMEBUFFER: 36008,
        READ_FRAMEBUFFER_BINDING: 36010,
        COLOR_ATTACHMENT0: 36064,
        RGBA_INTEGER: 36249,
        UNSIGNED_INT: 5125,
        RGBA32UI: 36208,
        RGBA16UI: 36214,
        UNSIGNED_INT_SAMPLER_2D: 36306,
        UNPACK_ROW_LENGTH: 3314,
        UNPACK_SKIP_ROWS: 3315,
        UNPACK_SKIP_PIXELS: 3316,
        FLOAT: 5126,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        UNSIGNED_INT_VEC2: 36294,
        UNSIGNED_INT_VEC3: 36295,
        UNSIGNED_INT_VEC4: 36296,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676
      },
      Tu = "_vs2fs_location0",
      Wu = 0,
      ju = 4,
      Hu = 6,
      du = [0, 1, 2, 0, 2, 3],
      bu = 2048,
      Cu = 4,
      ku = 256,
      eu = 64,
      Au = 268435456,
      Du = 65536,
      Mu = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Iu(uu) {
      return null === uu.name ? `#${uu.id}` : `#${uu.id} ${uu.name}`
    }
    const Gu = [],
      Uu = new WeakMap,
      nu = new WeakMap,
      su = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let tu = 1;
    const lu = new WeakMap;

    function gu(uu) {
      if (null === uu) return 0;
      let Ru = lu.get(uu);
      return void 0 === Ru && (Ru = tu++, lu.set(uu, Ru)), Ru
    }
    class cu {
      constructor(uu, Ru) {
        this.print = uu, this.now = Ru, this.shown = 0, this.jJ = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.kx = [], this.dropped = 0
      }
      line(uu) {
        const Ru = this.now();
        if (Ru - this.second >= 1e3 && (this.second = Ru, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.jJ++, void this.store(uu);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${uu} (the last line here: the rest go to bloxdDebug.save())` : uu)
      }
      keep(uu) {
        this.sections++, this.store(uu)
      }
      store(uu) {
        this.kx.push(`${new Date(Date.now()).toISOString()} ${uu}`), this.kx.length > 2e4 && (this.kx.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.jJ} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.kx].join("\n")
      }
    }
    let Lu = null;

    function zu() {
      if (null === Lu) {
        const uu = new cu((uu => {
          (0, Qu.i)("render", uu)
        }), (() => performance.now()));
        (0, Qu.g)("render", (() => uu.dump())), Lu = uu
      }
      return Lu
    }

    function Fu(uu) {
      zu().line(uu)
    }

    function wu(uu) {
      zu().keep(uu)
    }

    function Zu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return uu.length <= Ru ? uu : `${uu.slice(0,Ru)}... (${uu.length-Ru} more characters)`
    }

    function hu(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = su.pendingCheck;
      if (null === mu) return;
      const Ju = "undefined" !== typeof WebGL2RenderingContext && uu instanceof WebGL2RenderingContext,
        Nu = {
          gl: uu,
          program: yu,
          call: Eu,
          yT: Ku,
          instances: Qu,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (mu.draws.push(Nu), Ju) try {
        const Eu = function(uu) {
          const Ru = [],
            yu = new Map,
            Eu = Math.min(16, uu.getParameter(pu.MAX_VERTEX_ATTRIBS));
          for (let Ku = 0; Ku < Eu; Ku++) {
            if (!uu.getVertexAttrib(Ku, pu.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Eu = uu.getVertexAttrib(Ku, pu.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Qu = uu.getVertexAttribOffset(Ku, pu.VERTEX_ATTRIB_ARRAY_POINTER),
              mu = uu.getVertexAttrib(Ku, pu.VERTEX_ATTRIB_ARRAY_STRIDE),
              Ju = uu.getVertexAttrib(Ku, pu.VERTEX_ATTRIB_ARRAY_SIZE),
              Nu = uu.getVertexAttrib(Ku, pu.VERTEX_ATTRIB_ARRAY_TYPE),
              Xu = "VERTEX_ATTRIB_ARRAY_INTEGER" in uu && uu.getVertexAttrib(Ku, pu.VERTEX_ATTRIB_ARRAY_INTEGER),
              Vu = "VERTEX_ATTRIB_ARRAY_DIVISOR" in uu ? uu.getVertexAttrib(Ku, pu.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            yu.set(Ku, {
              buffer: Eu,
              offset: Qu,
              stride: mu
            }), Ru.push(`@${Ku} buf#${gu(Eu)} +${Qu} stride ${mu} ${Ju}x0x${Nu.toString(16)}${Xu?" int":""} div ${Vu}`)
          }
          return {
            lines: Ru,
            byLocation: yu
          }
        }(uu);
        if (Nu.attributes = Eu.lines, "inst" === yu.terrain) {
          const {
            group: Ku,
            chunk: Ju
          } = function(uu, Ru, yu) {
            const Eu = Ru.get(Hu),
              Ku = uu.getVertexAttrib(Hu, pu.CURRENT_VERTEX_ATTRIB),
              Qu = Eu ? `+${Eu.offset}` : Ku ? Array.from(Ku).slice(0, 3).join(",") : "?";
            let mu = yu.groups.get(Qu);
            return void 0 === mu && (mu = yu.groups.size, yu.groups.set(Qu, mu)), {
              group: mu,
              chunk: Qu
            }
          }(uu, Eu.byLocation, mu);
          Nu.group = Ku, Nu.chunk = Ju;
          for (const uu of [Wu, ju]) {
            var Xu;
            const Ru = null === (Xu = Eu.byLocation.get(uu)) || void 0 === Xu ? void 0 : Xu.buffer;
            Ru && Nu.pages.push({
              kind: "buf",
              buffer: Ru
            })
          }! function(uu, Ru, yu, Eu, Ku, Qu, mu) {
            const Ju = Eu.get(Wu),
              Nu = mu.parts.get(Qu);
            if (void 0 === Nu && mu.parts.size >= Cu) return;
            const Xu = Math.min(Ku, eu, ku - (null !== Nu && void 0 !== Nu ? Nu : 0));
            if (null === Ju || void 0 === Ju || !Ju.buffer || Xu <= 0) return;
            const Vu = Pu(uu, Ru, yu);
            if (!Vu) return;
            const ru = Ju.stride || 12,
              Bu = Ou(uu, Ju.buffer, Ju.offset, (Xu - 1) * ru + 12),
              xu = new DataView(Bu.buffer),
              Su = function(uu, Ru) {
                const yu = function(uu) {
                    const Ru = fu.get(uu);
                    if (void 0 !== Ru && (null === Ru || uu.isProgram(Ru))) return Ru;
                    su.inProbe = !0;
                    let yu = null;
                    try {
                      yu = iu(uu, vu, au, "fed", "the record feed")
                    } finally {
                      su.inProbe = !1
                    }
                    return fu.set(uu, yu), yu
                  }(uu),
                  Eu = yu ? qu(uu, yu, Ru, (() => {
                    uu.drawArraysInstanced(pu.POINTS, 0, 1, Ru)
                  }), "decode probe input (the record feed)") : null;
                return Eu ? new Uint32Array(Eu.buffer) : null
              }(uu, Xu);
            Su || mu.fed.failed++;
            const Tu = qu(uu, Vu, 4 * Xu, (() => {
              uu.drawArraysInstanced(pu.POINTS, 0, 4, Xu)
            }));
            if (!Tu) return;
            mu.parts.set(Qu, (null !== Nu && void 0 !== Nu ? Nu : 0) + Xu);
            for (let pu = 0; pu < Xu; pu++) {
              const uu = pu * ru,
                Ru = [xu.getUint32(uu, !0), xu.getUint32(uu + 4, !0), xu.getUint32(uu + 8, !0)],
                yu = Su ? [Su[3 * pu], Su[3 * pu + 1], Su[3 * pu + 2]] : Ru;
              Su && (mu.fed.records++, yu.some(((uu, yu) => uu !== Ru[yu])) && (mu.fed.differing++, mu.fed.first.length < 8 && mu.fed.first.push(`part ${Qu} instance ${pu}: fed ${yu.map(KR).join(" ")} buffer ${Ru.map(KR).join(" ")}`)));
              for (let Eu = 0; Eu < 4; Eu++) {
                const uu = 3 * (4 * pu + Eu);
                mu.vertices.push({
                  record: yu,
                  slot: Eu,
                  group: Qu,
                  gpu: [Tu[uu], Tu[uu + 1], Tu[uu + 2]]
                })
              }
            }
          }(uu, Ru, yu, Eu.byLocation, Qu, Ku, mu)
        } else {
          const Eu = uR(uu, Ru, 16),
            Qu = uR(uu, Ru, 8);
          for (const uu of [Eu, Qu]) uu && Nu.pages.push({
            kind: "tex",
            texture: uu
          });
          Eu && function(uu, Ru, yu, Eu, Ku, Qu) {
            if (Qu.parts.size >= Cu) return;
            const mu = Pu(uu, Ru, yu);
            if (!mu) return;
            let Ju = 6 * ku;
            const Nu = [];
            for (const [xu, Su] of Ku) {
              const uu = Math.min(Su, Ju, Math.max(6, 6 * Math.floor(ku / Ku.length)));
              uu > 0 && (Nu.push([xu, uu]), Ju -= uu)
            }
            const Xu = Nu.reduce(((uu, Ru) => {
                let [, yu] = Ru;
                return uu + yu
              }), 0),
              Vu = qu(uu, mu, Xu, (() => {
                for (const [Ru, yu] of Nu) uu.drawArrays(pu.POINTS, Ru, yu)
              }));
            if (!Vu) return;
            let ru = 0;
            for (const [xu, Su] of Nu) {
              const Ru = Math.floor(xu / 6),
                yu = Math.floor((xu + Su - 1) / 6) - Ru + 1,
                Ku = RR(uu, Eu, bu, Ru, yu);
              for (let uu = xu; uu < xu + Su; uu++, ru++) {
                var Bu;
                const yu = 4 * (Math.floor(uu / 6) - Ru),
                  Eu = [Ku[yu], Ku[yu + 1], Ku[yu + 2]];
                Qu.parts.set(Ku[yu + 3], (null !== (Bu = Qu.parts.get(Ku[yu + 3])) && void 0 !== Bu ? Bu : 0) + (uu % 6 === 0 ? 1 : 0)), Qu.vertices.push({
                  record: Eu,
                  slot: du[uu % 6],
                  group: Ku[yu + 3],
                  gpu: [Vu[3 * ru], Vu[3 * ru + 1], Vu[3 * ru + 2]]
                })
              }
            }
          }(uu, Ru, yu, Eu, Ku, mu)
        }
      } catch (Vu) {
        Fu(`decode probe failed on program ${Iu(yu)}: ${String(Vu)}`)
      }
    }

    function Pu(uu, Ru, yu) {
      if (void 0 !== yu.probe) return yu.probe && Yu(uu, Ru, yu.probe), yu.probe;
      yu.probe = null, su.inProbe = !0;
      try {
        yu.probe = function(uu, Ru) {
          return iu(uu, Ru.vertex, Ru.fragment, Tu, `program ${Iu(Ru)}'s twin`)
        }(uu, yu)
      } finally {
        su.inProbe = !1
      }
      return yu.probe && Yu(uu, Ru, yu.probe), yu.probe
    }

    function iu(uu, Ru, yu, Eu, Ku) {
      const Qu = [uu.createShader(pu.VERTEX_SHADER), uu.createShader(pu.FRAGMENT_SHADER)],
        mu = uu.createProgram();
      if (!mu || !Qu[0] || !Qu[1]) return null;
      uu.shaderSource(Qu[0], Ru), uu.shaderSource(Qu[1], yu);
      for (const Nu of Qu) uu.compileShader(Nu), uu.attachShader(mu, Nu);
      uu.transformFeedbackVaryings(mu, [Eu], pu.INTERLEAVED_ATTRIBS), uu.linkProgram(mu);
      for (const Nu of Qu) uu.deleteShader(Nu);
      var Ju;
      return uu.getProgramParameter(mu, pu.LINK_STATUS) ? mu : (Fu(`decode probe: ${Ku} failed to link: ${Zu(null!==(Ju=uu.getProgramInfoLog(mu))&&void 0!==Ju?Ju:"",300)}`), uu.deleteProgram(mu), null)
    }

    function Yu(uu, Ru, yu) {
      const Eu = uu.getProgramParameter(Ru, pu.ACTIVE_UNIFORM_BLOCKS);
      for (let Ju = 0; Ju < Eu; Ju++) {
        const Eu = uu.getActiveUniformBlockName(Ru, Ju),
          Ku = null === Eu ? pu.INVALID_INDEX : uu.getUniformBlockIndex(yu, Eu);
        Ku !== pu.INVALID_INDEX && uu.uniformBlockBinding(yu, Ku, uu.getActiveUniformBlockParameter(Ru, Ju, pu.UNIFORM_BLOCK_BINDING))
      }
      const Ku = uu.getParameter(pu.CURRENT_PROGRAM);
      uu.useProgram(yu);
      const Qu = uu.getProgramParameter(Ru, pu.ACTIVE_UNIFORMS),
        mu = uu.getActiveUniforms(Ru, [...Array(Qu).keys()], pu.UNIFORM_BLOCK_INDEX);
      for (let Ju = 0; Ju < Qu; Ju++) {
        const Eu = uu.getActiveUniform(Ru, Ju);
        if (!Eu || -1 !== mu[Ju]) continue;
        const Ku = Eu.name.replace(/\[0\]$/, "");
        for (let Qu = 0; Qu < Eu.size; Qu++) {
          const mu = Eu.size > 1 ? `${Ku}[${Qu}]` : Eu.name,
            Ju = uu.getUniformLocation(Ru, mu),
            Nu = uu.getUniformLocation(yu, mu);
          Ju && Nu && ou(uu, Nu, Eu.type, uu.getUniform(Ru, Ju))
        }
      }
      uu.useProgram(Ku)
    }

    function ou(uu, Ru, yu, Eu) {
      const Ku = ArrayBuffer.isView(Eu) ? Array.from(Eu) : [Number(Eu)];
      switch (yu) {
        case pu.FLOAT:
          return void uu.uniform1f(Ru, Ku[0]);
        case pu.FLOAT_VEC2:
          return void uu.uniform2fv(Ru, Ku);
        case pu.FLOAT_VEC3:
          return void uu.uniform3fv(Ru, Ku);
        case pu.FLOAT_VEC4:
          return void uu.uniform4fv(Ru, Ku);
        case pu.FLOAT_MAT3:
          return void uu.uniformMatrix3fv(Ru, !1, Ku);
        case pu.FLOAT_MAT4:
          return void uu.uniformMatrix4fv(Ru, !1, Ku);
        case pu.UNSIGNED_INT:
          return void uu.uniform1ui(Ru, Ku[0]);
        case pu.UNSIGNED_INT_VEC2:
          return void uu.uniform2uiv(Ru, Ku);
        case pu.UNSIGNED_INT_VEC3:
          return void uu.uniform3uiv(Ru, Ku);
        case pu.UNSIGNED_INT_VEC4:
          return void uu.uniform4uiv(Ru, Ku);
        case pu.INT_VEC2:
          return void uu.uniform2iv(Ru, Ku);
        case pu.INT_VEC3:
          return void uu.uniform3iv(Ru, Ku);
        case pu.INT_VEC4:
          return void uu.uniform4iv(Ru, Ku);
        default:
          uu.uniform1i(Ru, Ku[0])
      }
    }

    function qu(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Qu = uu.getParameter(pu.CURRENT_PROGRAM),
        mu = uu.getParameter(pu.TRANSFORM_FEEDBACK_BINDING),
        Ju = uu.getParameter(pu.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Nu = uu.getParameter(pu.COPY_READ_BUFFER_BINDING),
        Xu = uu.isEnabled(pu.RASTERIZER_DISCARD),
        Vu = uu.createTransformFeedback(),
        ru = uu.createBuffer();
      su.inProbe = !0;
      try {
        const Qu = uu.getError();
        Qu !== pu.NO_ERROR && Fu(`GL error 0x${Qu.toString(16)} pending before the decode probe (the renderer's)`), uu.useProgram(Ru), uu.bindTransformFeedback(pu.TRANSFORM_FEEDBACK, Vu), uu.bindBuffer(pu.TRANSFORM_FEEDBACK_BUFFER, ru), uu.bufferData(pu.TRANSFORM_FEEDBACK_BUFFER, 12 * yu, pu.STREAM_READ), uu.bindBufferBase(pu.TRANSFORM_FEEDBACK_BUFFER, 0, ru), uu.enable(pu.RASTERIZER_DISCARD), uu.beginTransformFeedback(pu.POINTS), Eu(), uu.endTransformFeedback(), uu.bindBufferBase(pu.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const mu = uu.getError();
        if (mu !== pu.NO_ERROR) return Fu(`${Ku}: GL error 0x${mu.toString(16)} on the feedback draw`), null;
        const Ju = new Float32Array(3 * yu);
        return uu.bindBuffer(pu.COPY_READ_BUFFER, ru), uu.getBufferSubData(pu.COPY_READ_BUFFER, 0, Ju), Ju
      } finally {
        Xu || uu.disable(pu.RASTERIZER_DISCARD), uu.bindTransformFeedback(pu.TRANSFORM_FEEDBACK, mu), uu.bindBuffer(pu.TRANSFORM_FEEDBACK_BUFFER, Ju), uu.bindBuffer(pu.COPY_READ_BUFFER, Nu), uu.deleteTransformFeedback(Vu), uu.deleteBuffer(ru), uu.useProgram(Qu), su.inProbe = !1
      }
    }

    function Ou(uu, Ru, yu, Eu) {
      const Ku = uu.getParameter(pu.COPY_READ_BUFFER_BINDING),
        Qu = new Uint8Array(Eu);
      return uu.bindBuffer(pu.COPY_READ_BUFFER, Ru), uu.getBufferSubData(pu.COPY_READ_BUFFER, yu, Qu), uu.bindBuffer(pu.COPY_READ_BUFFER, Ku), Qu
    }
    const vu = `#version 300 es\nlayout(location = ${Wu}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      au = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      fu = new WeakMap;

    function uR(uu, Ru, yu) {
      const Eu = uu.getProgramParameter(Ru, pu.ACTIVE_UNIFORMS),
        Ku = uu.getParameter(pu.ACTIVE_TEXTURE);
      try {
        for (let Ku = 0; Ku < Eu; Ku++) {
          const Eu = uu.getActiveUniform(Ru, Ku);
          if ((null === Eu || void 0 === Eu ? void 0 : Eu.type) !== pu.UNSIGNED_INT_SAMPLER_2D) continue;
          const Qu = uu.getUniformLocation(Ru, Eu.name),
            mu = Qu ? uu.getUniform(Ru, Qu) : -1;
          if (mu < 0) continue;
          uu.activeTexture(pu.TEXTURE0 + mu);
          const Ju = uu.getParameter(pu.TEXTURE_BINDING_2D);
          if (Ju && nu.get(Ju) === yu) return Ju
        }
        return null
      } finally {
        uu.activeTexture(Ku)
      }
    }

    function RR(uu, Ru, yu, Eu, Ku) {
      const Qu = new Uint32Array(4 * Ku),
        mu = uu.getParameter(pu.READ_FRAMEBUFFER_BINDING),
        Ju = uu.createFramebuffer();
      uu.bindFramebuffer(pu.READ_FRAMEBUFFER, Ju), uu.framebufferTexture2D(pu.READ_FRAMEBUFFER, pu.COLOR_ATTACHMENT0, pu.TEXTURE_2D, Ru, 0);
      try {
        let Ru = 0;
        for (; Ru < Ku;) {
          const mu = Eu + Ru,
            Ju = mu % yu,
            Nu = Math.min(Ku - Ru, yu - Ju);
          uu.readPixels(Ju, Math.floor(mu / yu), Nu, 1, pu.RGBA_INTEGER, pu.UNSIGNED_INT, Qu.subarray(4 * Ru, 4 * (Ru + Nu))), Ru += Nu
        }
      } finally {
        uu.bindFramebuffer(pu.READ_FRAMEBUFFER, mu), uu.deleteFramebuffer(Ju)
      }
      return Qu
    }

    function yR(uu, Ru, yu) {
      let Eu = 0,
        Ku = 0;
      for (let Nu = 0; Nu < Ru.bytes.length; Nu += Du) {
        Eu++;
        const uu = Math.min(Nu + Du, Ru.bytes.length);
        xu(Ru.bytes.subarray(Nu, uu)) !== xu(yu.subarray(Nu, uu)) && Ku++
      }
      const Qu = `${uu} ${Ru.bytes.length} B cpu ${xu(Ru.bytes).toString(16)} gpu ${xu(yu).toString(16)}, ${Ku}/${Eu} blocks differ${Ru.missed?`, ${Ru.missed} GPU-side writes uncopied`:""}`;
      if (0 === Ku) return Qu;
      const {
        count: mu,
        offsets: Ju
      } = function(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Eu = Math.min(uu.length, Ru.length);
        let Ku = Math.abs(uu.length - Ru.length);
        const Qu = [];
        for (let mu = 0; mu < Eu; mu++) uu[mu] !== Ru[mu] && (Ku++, Qu.length < yu && Qu.push(mu));
        return {
          count: Ku,
          offsets: Qu
        }
      }(Ru.bytes, yu);
      return wu([`${Qu}: ${mu} bytes differ`, ...Ju.map((uu => `  +${uu}: cpu ${Su(Ru.bytes,uu)} | gpu ${Su(yu,uu)}`))].join("\n")), `${Qu}: ${mu} bytes differ, first at ${Ju.join(", ")} (context in the saved file)`
    }

    function ER(uu) {
      if (0 === uu.vertices.length) return void Fu(`decode probe (${uu.reason}): no terrain draw probed (${uu.draws.length} seen)`);
      const Ru = function(uu) {
          const Ru = new Map;
          for (const Eu of uu) {
            const uu = Ru.get(Eu.group);
            uu ? uu.push(Eu) : Ru.set(Eu.group, [Eu])
          }
          const yu = {
            vertices: uu.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Eu, Ku] of Ru) {
            const uu = new Map,
              Ru = Ku.map((Ru => {
                const yu = Vu(Ru.record, Ru.slot),
                  Eu = [Ru.gpu[0] - yu[0], Ru.gpu[1] - yu[1], Ru.gpu[2] - yu[2]],
                  Ku = Eu.map((uu => Math.round(64 * uu))).join(","),
                  Qu = uu.get(Ku);
                return Qu ? Qu.count++ : uu.set(Ku, {
                  count: 1,
                  offset: Eu
                }), yu
              }));
            let Qu = [0, 0, 0],
              mu = 0;
            for (const yu of uu.values()) yu.count > mu && (mu = yu.count, Qu = yu.offset);
            yu.translations.set(Eu, Qu), Ku.forEach(((uu, Eu) => {
              var Ku;
              const mu = [Ru[Eu][0] + Qu[0], Ru[Eu][1] + Qu[1], Ru[Eu][2] + Qu[2]];
              if (mu.every(((Ru, yu) => {
                  return Eu = uu.gpu[yu], Ku = Ru, Math.abs(Eu - Ku) <= Math.max(.001, 1e-6 * Math.abs(Ku));
                  var Eu, Ku
                }))) return;
              yu.mismatches++, yu.byDirection[Ju(uu.record[2])]++, yu.byDiagonal[Nu(uu.record[2])]++;
              const Xu = ru(uu.record);
              yu.byBand[Xu] = (null !== (Ku = yu.byBand[Xu]) && void 0 !== Ku ? Ku : 0) + 1, yu.first.length < Bu && yu.first.push({
                ...uu,
                expected: mu
              })
            }))
          }
          return yu
        }(uu.vertices),
        yu = Ru.byDirection.map(((uu, Ru) => uu ? `${mu[Ru]} ${uu}` : "")).filter(Boolean).join(" "),
        Eu = Object.entries(Ru.byBand).map((uu => {
          let [Ru, yu] = uu;
          return `${Ru}: ${yu}`
        })).join(" ");
      if (Fu(`decode probe (${uu.reason}): ${Ru.mismatches}/${Ru.vertices} vertices differ from the CPU decode over ${uu.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Ru.mismatches ? ` by direction [${yu}] diagonal [0: ${Ru.byDiagonal[0]} 1: ${Ru.byDiagonal[1]}] extent [${Eu}]` : "")), uu.fed.records > 0 || uu.fed.failed > 0) {
        Fu(`decode probe input: ${uu.fed.differing}/${uu.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (uu.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (uu.fed.failed ? `; the feed failed on ${uu.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Ru of uu.fed.first) Fu(`  ${Ru}`)
      }
      for (const Ku of Ru.first) {
        const [uu, Ru, yu] = Ku.record;
        Fu(`  mismatch part ${Ku.group} r0 ${uu.toString(16)} r1 ${Ru.toString(16)} r2 ${yu.toString(16)} slot ${Ku.slot} (${mu[Ju(yu)]}): expected ${Ku.expected.map(QR).join(",")} gpu ${Ku.gpu.map(QR).join(",")}`)
      }
      wu(`decode probe translations: ${[...Ru.translations].map((uu=>{let[Ru,yu]=uu;return`${Ru}: ${yu.map(QR).join(",")}`})).join("; ")}`)
    }

    function KR(uu) {
      return uu.toString(16)
    }

    function QR(uu) {
      return Number.isInteger(uu) ? String(uu) : uu.toFixed(3)
    }

    function mR(uu) {
      return null !== su.pendingCheck ? Promise.resolve() : new Promise((Ru => {
        let yu = !1;
        const Eu = {
          reason: uu,
          terrainDraws: 0,
          draws: [],
          vertices: [],
          parts: new Map,
          groups: new Map,
          fed: {
            records: 0,
            differing: 0,
            first: [],
            failed: 0
          }
        };
        su.pendingCheck = Eu;
        const Ku = () => {
            su.pendingCheck = null;
            try {
              ! function(uu) {
                Fu(`draw ranges (${uu.reason}): ${uu.terrainDraws} terrain draws in the frame, the first ${uu.draws.length} here`);
                for (const Ru of uu.draws) {
                  const uu = Ru.yT.slice(0, 8).map((uu => {
                      let [Ru, yu] = uu;
                      return `${Ru}+${yu}`
                    })).join(" "),
                    yu = Ru.yT.length > 8 ? ` (+${Ru.yT.length-8} ranges)` : "";
                  Fu(`  ${Iu(Ru.program)} ${Ru.program.terrain} ${Ru.call} ${uu}${yu} x${Ru.instances}${Ru.group>=0?` part ${Ru.group} chunk ${Ru.chunk}`:""} | ${Ru.attributes.join(" | ")}`)
                }
              }(Eu), ER(Eu);
              Eu.draws.some((uu => "undefined" !== typeof WebGL2RenderingContext && uu.gl instanceof WebGL2RenderingContext)) || 0 === Eu.draws.length ? function(uu) {
                const Ru = [],
                  yu = new Map;
                for (const Eu of uu)
                  if ("undefined" !== typeof WebGL2RenderingContext && Eu.gl instanceof WebGL2RenderingContext)
                    for (const uu of Eu.pages) yu.set("buf" === uu.kind ? uu.buffer : uu.texture, {
                      page: uu,
                      gl: Eu.gl
                    });
                for (const [Eu, {
                    page: Ku,
                    gl: Qu
                  }] of yu) {
                  const uu = Uu.get(Eu);
                  if (!uu) {
                    Ru.push(`${Ku.kind}#${gu(Eu)}: no CPU copy (${su.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Ku.kind) {
                    Ru.push(yR(`buf#${uu.id}`, uu, Ou(Qu, Ku.buffer, 0, uu.bytes.length)));
                    continue
                  }
                  const yu = RR(Qu, Ku.texture, uu.width, 0, uu.width * uu.height),
                    mu = 16 === uu.texelBytes ? new Uint8Array(yu.buffer) : new Uint8Array(new Uint16Array(yu).buffer);
                  Ru.push(yR(`tex#${uu.id} (${16===uu.texelBytes?"records":"light"})`, uu, mu))
                }
                for (const Eu of Ru) Fu(`page readback ${Eu}`)
              }(Eu.draws) : Fu("page readback: none on WebGL1 (no buffer readback)")
            } catch (uu) {
              Fu(`check failed: ${String(uu)}`)
            }
            Ru()
          },
          Qu = () => {
            if (Eu.draws.length > 0 && !yu) return yu = !0, void setTimeout(Ku, 0);
            yu || requestAnimationFrame(Qu)
          };
        requestAnimationFrame(Qu), setTimeout((() => {
          yu || (yu = !0, Ku())
        }), 5e3)
      }))
    }
    var JR = yu(4470);
    const NR = 20,
      XR = 24,
      VR = Reflect.apply;

    function rR(uu, Ru, yu) {
      if (!uu) return;
      const Eu = uu[Ru];
      if ("function" === typeof Eu) {
        const Ku = yu(Eu);
        uu[Ru] = Ku, (0, JR.w)(Ku, Eu)
      }
    }
    let BR = !1;
    const xR = new WeakMap,
      SR = new WeakMap,
      pR = new WeakMap,
      TR = {
        gl: 0,
        lost: 0
      };
    let WR = {
        inst: {
          draws: 0,
          faces: 0
        },
        tex: {
          draws: 0,
          faces: 0
        },
        other: {
          draws: 0,
          faces: 0
        }
      },
      jR = {
        buffer: 0,
        texture: 0
      },
      HR = 0;

    function dR(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (uu instanceof ArrayBuffer) return new Uint8Array(uu, Ru, yu || void 0);
      if (!ArrayBuffer.isView(uu)) return null;
      const Eu = "BYTES_PER_ELEMENT" in uu ? uu.BYTES_PER_ELEMENT : 1,
        Ku = uu.byteOffset + Ru * Eu,
        Qu = yu ? yu * Eu : uu.byteLength - Ru * Eu;
      return new Uint8Array(uu.buffer, Ku, Math.max(0, Qu))
    }

    function bR(uu, Ru) {
      const yu = function(uu) {
        switch (uu) {
          case pu.ARRAY_BUFFER:
            return pu.ARRAY_BUFFER_BINDING;
          case pu.ELEMENT_ARRAY_BUFFER:
            return pu.ELEMENT_ARRAY_BUFFER_BINDING;
          case pu.COPY_READ_BUFFER:
            return pu.COPY_READ_BUFFER_BINDING;
          case pu.COPY_WRITE_BUFFER:
            return pu.COPY_WRITE_BUFFER_BINDING;
          case pu.UNIFORM_BUFFER:
            return pu.UNIFORM_BUFFER_BINDING;
          case pu.PIXEL_UNPACK_BUFFER:
            return pu.PIXEL_UNPACK_BUFFER_BINDING;
          case pu.TRANSFORM_FEEDBACK_BUFFER:
            return pu.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Ru);
      return yu ? uu.getParameter(yu) : null
    }

    function CR(uu) {
      const Ru = Uu.get(uu);
      Ru && (su.shadowBytes -= Ru.bytes.length, Uu.delete(uu))
    }

    function kR(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      CR(uu), su.shadowBytes + Ru > Au ? su.uncopied++ : (su.shadowBytes += Ru, Uu.set(uu, {
        id: gu(uu),
        bytes: new Uint8Array(Ru),
        width: yu,
        height: Eu,
        texelBytes: Ku,
        missed: 0
      }))
    }

    function eR(uu, Ru) {
      for (const yu of ["deleteBuffer", "deleteTexture"]) rR(uu, yu, (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return yu[0] && CR(yu[0]), VR(uu, this, yu)
      }));
      rR(uu, "shaderSource", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return yu[0] && "string" === typeof yu[1] && xR.set(yu[0], yu[1]), VR(uu, this, yu)
      })), rR(uu, "attachShader", (uu => function() {
        for (var Ru, yu = arguments.length, Eu = new Array(yu), Ku = 0; Ku < yu; Ku++) Eu[Ku] = arguments[Ku];
        const Qu = Eu[0],
          mu = null !== (Ru = SR.get(Qu)) && void 0 !== Ru ? Ru : [];
        return mu.push(Eu[1]), SR.set(Qu, mu), VR(uu, this, Eu)
      })), rR(uu, "linkProgram", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        const Ku = VR(uu, this, yu);
        return su.inProbe || function(uu, Ru) {
          var yu, Eu, Ku;
          "undefined" !== typeof HTMLCanvasElement && uu.canvas instanceof HTMLCanvasElement && function(uu) {
            if (UR.has(uu)) return;
            UR.add(uu);
            for (const Ru of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) uu.addEventListener(Ru, (uu => {
              TR.lost < NR && (TR.lost++, Fu(`${Ru}${"statusMessage"in uu?`: ${String(uu.statusMessage)}`:""}`))
            }))
          }(uu.canvas);
          su.context ??= uu;
          const Qu = null !== (yu = SR.get(Ru)) && void 0 !== yu ? yu : [];
          let mu = "",
            Ju = "";
          for (const Vu of Qu) {
            var Nu;
            const uu = null !== (Nu = xR.get(Vu)) && void 0 !== Nu ? Nu : "";
            /\bgl_Position\b/.test(uu) ? mu = uu : Ju = uu
          }
          const Xu = {
            id: gu(Ru),
            name: null !== (Eu = null === (Ku = Mu.exec(mu)) || void 0 === Ku ? void 0 : Ku[1]) && void 0 !== Eu ? Eu : null,
            gl: uu,
            vertex: mu,
            fragment: Ju,
            terrain: DR(mu),
            checked: !1,
            firstDraw: !1
          };
          if (pR.set(Ru, Xu), Gu.push([Ru, Xu]), null !== Xu.terrain) {
            const Ru = Qu.map((Ru => {
              var yu;
              return null !== (yu = uu.getShaderInfoLog(Ru)) && void 0 !== yu ? yu : ""
            })).filter((uu => "" !== uu.trim()));
            Ru.length > 0 && wu(`program ${Iu(Xu)} (${Xu.terrain}) shader logs:\n${Zu(Ru.join("\n"))}`)
          }
        }(this, yu[0]), Ku
      })), rR(uu, "bufferData", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        const Ku = VR(uu, this, yu);
        if (!su.inProbe) {
          const uu = bR(this, yu[0]);
          if (uu) {
            var Qu, mu, Ju;
            const Ru = "number" === typeof yu[1] ? null : dR(yu[1], null !== (Qu = yu[3]) && void 0 !== Qu ? Qu : 0, null !== (mu = yu[4]) && void 0 !== mu ? mu : 0);
            var Nu;
            if (kR(uu, "number" === typeof yu[1] ? yu[1] : null !== (Ju = null === Ru || void 0 === Ru ? void 0 : Ru.length) && void 0 !== Ju ? Ju : 0), Ru) null === (Nu = Uu.get(uu)) || void 0 === Nu || Nu.bytes.set(Ru)
          }
        }
        return Ku
      })), rR(uu, "bufferSubData", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        const Ku = VR(uu, this, yu);
        if (!su.inProbe) {
          var Qu, mu;
          const uu = bR(this, yu[0]),
            Ru = uu ? Uu.get(uu) : void 0,
            Eu = dR(yu[2], null !== (Qu = yu[3]) && void 0 !== Qu ? Qu : 0, null !== (mu = yu[4]) && void 0 !== mu ? mu : 0);
          if (Ru && Eu) {
            const uu = yu[1];
            Ru.bytes.set(Eu.subarray(0, Math.max(0, Ru.bytes.length - uu)), uu), AR("buffer", Ru, uu, Eu.length)
          }
        }
        return Ku
      })), Ru && (rR(uu, "copyBufferSubData", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        const Ku = VR(uu, this, yu);
        if (!su.inProbe) {
          const [uu, Ru, Eu, Ku, Qu] = yu, mu = bR(this, uu), Ju = bR(this, Ru), Nu = mu ? Uu.get(mu) : void 0, Xu = Ju ? Uu.get(Ju) : void 0;
          Xu && (Nu ? Xu.bytes.set(Nu.bytes.slice(Eu, Eu + Qu), Ku) : Xu.missed++)
        }
        return Ku
      })), rR(uu, "texStorage2D", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        const Ku = VR(uu, this, yu),
          [, , Qu, mu, Ju] = yu;
        if (!su.inProbe && (Qu === pu.RGBA32UI || Qu === pu.RGBA16UI)) {
          const uu = this.getParameter(pu.TEXTURE_BINDING_2D),
            Ru = Qu === pu.RGBA32UI ? 16 : 8;
          uu && (nu.set(uu, Ru), kR(uu, mu * Ju * Ru, mu, Ju, Ru))
        }
        return Ku
      })), rR(uu, "texSubImage2D", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        const Ku = VR(uu, this, yu);
        return !su.inProbe && yu.length >= 9 && yu[0] === pu.TEXTURE_2D && 0 === yu[1] && function(uu, Ru) {
          var yu;
          const Eu = uu.getParameter(pu.TEXTURE_BINDING_2D),
            Ku = Eu ? Uu.get(Eu) : void 0;
          if (!Ku) return;
          const [, , Qu, mu, Ju, Nu] = Ru;
          let Xu = dR(Ru[8], null !== (yu = Ru[9]) && void 0 !== yu ? yu : 0);
          if (null === Xu && "number" === typeof Ru[8]) {
            const yu = bR(uu, pu.PIXEL_UNPACK_BUFFER),
              Eu = yu ? Uu.get(yu) : void 0;
            Xu = Eu ? Eu.bytes.subarray(Ru[8]) : null
          }
          if (null === Xu) return void Ku.missed++;
          const Vu = uu.getParameter(pu.UNPACK_ROW_LENGTH) || Ju,
            ru = uu.getParameter(pu.UNPACK_SKIP_ROWS),
            Bu = uu.getParameter(pu.UNPACK_SKIP_PIXELS),
            xu = Ku.texelBytes;
          for (let Su = 0; Su < Nu; Su++) {
            const uu = ((ru + Su) * Vu + Bu) * xu,
              Ru = ((mu + Su) * Ku.width + Qu) * xu;
            Ku.bytes.set(Xu.subarray(uu, uu + Ju * xu), Ru)
          }
          AR("texture", Ku, (mu * Ku.width + Qu) * xu, Ju * Nu * xu)
        }(this, yu), Ku
      })), rR(uu, "copyTexSubImage2D", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        const Ku = yu[0] === pu.TEXTURE_2D ? this.getParameter(pu.TEXTURE_BINDING_2D) : null,
          Qu = Ku ? Uu.get(Ku) : void 0;
        return Qu && Qu.missed++, VR(uu, this, yu)
      })));
      for (const yu of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) rR(uu, yu, (uu => function() {
        for (var Ru = arguments.length, Eu = new Array(Ru), Ku = 0; Ku < Ru; Ku++) Eu[Ku] = arguments[Ku];
        const Qu = VR(uu, this, Eu);
        return su.inProbe || IR(this, yu, Eu), Qu
      }));
      rR(uu, "getExtension", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        const Ku = VR(uu, this, yu);
        return Ku && "object" === typeof Ku && function(uu, Ru, yu) {
          const Eu = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Ru in Eu) || yu.bloxdRenderDebug) return;
          yu.bloxdRenderDebug = !0;
          for (const Ku of Eu[Ru]) {
            const Ru = yu[Ku];
            "function" === typeof Ru && (yu[Ku] = function() {
              for (var Eu = arguments.length, Qu = new Array(Eu), mu = 0; mu < Eu; mu++) Qu[mu] = arguments[mu];
              const Ju = VR(Ru, yu, Qu);
              return su.inProbe || IR(uu, Ku, Qu), Ju
            })
          }
        }(this, yu[0], Ku), Ku
      }))
    }

    function AR(uu, Ru, yu, Eu) {
      jR[uu] += Eu, HR < 32 && Ru.bytes.length >= 1 << 20 && (HR++, wu(`upload ${uu} #${Ru.id} +${yu} ${Eu} B`))
    }

    function DR(uu) {
      if (!uu.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(uu) || /in uvec3 _p2vs_location0\b/.test(uu) ? "inst" : "tex"
    }

    function MR(uu, Ru, yu) {
      var Eu;
      if (yu.checked) return;
      yu.checked = !0;
      const Ku = uu.getProgramParameter(Ru, pu.LINK_STATUS),
        Qu = (null !== (Eu = uu.getProgramInfoLog(Ru)) && void 0 !== Eu ? Eu : "").trim();
      var mu;
      null === yu.terrain && Ku || (Fu(`program ${Iu(yu)} ${null!==(mu=yu.terrain)&&void 0!==mu?mu:"other"} link ${Ku?"ok":"FAILED"}${Qu?`: ${Zu(Qu,300)}`:""}`), Qu && wu(`program ${Iu(yu)} link log:\n${Zu(Qu)}`))
    }

    function IR(uu, Ru, yu) {
      var Eu;
      const Ku = uu.getParameter(pu.CURRENT_PROGRAM),
        Qu = Ku ? pR.get(Ku) : void 0;
      if (!Ku || !Qu) return;
      const mu = null !== (Eu = Qu.terrain) && void 0 !== Eu ? Eu : "other",
        {
          yT: Ju,
          instances: Nu
        } = function(uu, Ru) {
          switch (uu) {
            case "drawArrays":
              return {
                yT: [
                  [Ru[1], Ru[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                yT: [
                  [Ru[1], Ru[2]]
                ], instances: Ru[3]
              };
            case "drawElements":
              return {
                yT: [
                  [0, Ru[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                yT: [
                  [0, Ru[1]]
                ], instances: Ru[4]
              };
            case "multiDrawArraysWEBGL": {
              const uu = Ru[1],
                yu = Ru[3],
                Eu = Ru[2],
                Ku = Ru[4],
                Qu = [];
              for (let mu = 0; mu < Ru[5]; mu++) Qu.push([uu[Eu + mu], yu[Ku + mu]]);
              return {
                yT: Qu,
                instances: 1
              }
            }
            default:
              return {
                yT: [], instances: 0
              }
          }
        }(Ru, yu),
        Xu = "inst" === Qu.terrain ? Nu : Ju.reduce(((uu, Ru) => {
          let [, yu] = Ru;
          return uu + yu
        }), 0) / 6;
      if (WR[mu].draws++, WR[mu].faces += Xu, null === Qu.terrain) return;
      if (su.context = uu, !Qu.firstDraw) {
        Qu.firstDraw = !0, MR(uu, Ku, Qu), GR || (GR = !0, Fu(function(uu) {
          var Ru;
          const yu = uu.getParameter(pu.DEPTH_FUNC),
            Eu = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Ku = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in uu && uu.getParameter(pu.DRAW_FRAMEBUFFER_BINDING)) {
            const Ru = uu;
            Ku = Ru.getFramebufferAttachmentParameter(pu.DRAW_FRAMEBUFFER, pu.DEPTH_ATTACHMENT, pu.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Ru.getFramebufferAttachmentParameter(pu.DRAW_FRAMEBUFFER,pu.DEPTH_ATTACHMENT,pu.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Ru.getFramebufferAttachmentParameter(pu.DRAW_FRAMEBUFFER,pu.DEPTH_ATTACHMENT,pu.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Qu = uu.getParameter(pu.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Ru=Eu[yu])&&void 0!==Ru?Ru:`0x${yu.toString(16)}`} clear ${Qu}${516===yu||518===yu?" (reverse-Z)":""}, samples ${String(uu.getParameter(pu.SAMPLES))}, ${Ku}`
        }(uu)));
        const yu = uu.getError();
        yu !== pu.NO_ERROR && TR.gl < NR && (TR.gl++, Fu(`GL error 0x${yu.toString(16)} after program ${Iu(Qu)}'s first terrain draw (${Ru})`))
      }
      const Vu = su.pendingCheck;
      null !== Vu && (Vu.terrainDraws++, Vu.draws.length < XR && hu(uu, Ku, Qu, Ru, Ju, Nu))
    }
    let GR = !1;
    const UR = new WeakSet;
    var nR = yu(4275),
      sR = yu(4473);
    const tR = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let lR = !1;
    const gR = new WeakSet,
      cR = new WeakMap,
      LR = new WeakMap,
      zR = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let FR = 0,
      wR = !1,
      ZR = null,
      hR = {
        draws: 0,
        faces: 0
      };

    function PR(uu) {
      const Ru = globalThis[uu];
      return null === Ru || void 0 === Ru ? void 0 : Ru.prototype
    }

    function iR(uu) {
      return uu && "function" === typeof uu[Symbol.iterator] ? [...uu].sort().join(" ") : ""
    }

    function YR(uu, Ru) {
      const yu = null !== uu && void 0 !== uu ? uu : {},
        Eu = null !== Ru && void 0 !== Ru ? Ru : Object.keys(Object.getPrototypeOf(yu)).concat(Object.keys(yu));
      return [...new Set(Eu)].filter((uu => "number" === typeof yu[uu])).map((uu => `${uu} ${String(yu[uu])}`)).join(", ")
    }

    function oR(uu, Ru) {
      var yu;
      const Eu = null !== (yu = Ru.vertex) && void 0 !== yu ? yu : {};
      if (Eu.module && gR.has(Eu.module)) {
        var Ku;
        const yu = String(null !== (Ku = Eu.entryPoint) && void 0 !== Ku ? Ku : "");
        if (yu.startsWith("vs_packed") && cR.set(uu, yu), !wR) {
          var Qu, mu, Ju, Nu, Xu;
          wR = !0;
          const uu = null !== (Qu = Ru.depthStencil) && void 0 !== Qu ? Qu : {},
            Eu = null !== (mu = Ru.multisample) && void 0 !== mu ? mu : {},
            Ku = String(null !== (Ju = uu.depthCompare) && void 0 !== Ju ? Ju : "");
          Fu(`WebGPU terrain pipeline ${yu}: depth ${String(null!==(Nu=uu.format)&&void 0!==Nu?Nu:"none")} ${Ku}${Ku.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Xu=Eu.count)&&void 0!==Xu?Xu:1)}`)
        }
      }
    }

    function qR(uu) {
      rR(uu, "setPipeline", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return LR.set(this, yu[0]), VR(uu, this, yu)
      }));
      for (const Ru of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) rR(uu, Ru, (uu => function() {
        const yu = LR.get(this),
          Eu = yu ? cR.get(yu) : void 0;
        for (var Ku = arguments.length, Qu = new Array(Ku), mu = 0; mu < Ku; mu++) Qu[mu] = arguments[mu];
        return void 0 !== Eu && OR(Ru, Eu, Qu), VR(uu, this, Qu)
      }))
    }

    function OR(uu, Ru, yu) {
      var Eu;
      (hR.draws++, "draw" === uu || "drawIndexed" === uu) && (hR.faces += yu[0] * (null !== (Eu = yu[1]) && void 0 !== Eu ? Eu : 1) / 6);
      if (null !== ZR && ZR.length < XR) {
        const Eu = ("draw" === uu ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === uu ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Ru, Eu) => {
          const Ku = uu.endsWith("Indirect") ? yu[1] : yu[Eu];
          return `${Ru} ${String(null!==Ku&&void 0!==Ku?Ku:"instances"===Ru?1:0)}`
        }));
        ZR.push(`  ${Ru} ${uu} ${Eu.join(" ")}`)
      }
    }

    function vR() {
      if (lR || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      lR = !0, rR(PR("GPU"), "requestAdapter", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return VR(uu, this, yu).then((uu => {
          var Ru;
          uu ? function(uu) {
            var Ru;
            const yu = null !== (Ru = uu.info) && void 0 !== Ru ? Ru : {};
            Fu(`WebGPU adapter ${["vendor","architecture","device","description"].map((uu=>{var Ru;return`${uu} "${String(null!==(Ru=yu[uu])&&void 0!==Ru?Ru:"")}"`})).join(" ")}${uu.isFallbackAdapter?" (fallback)":""}`), Fu(`WebGPU adapter features ${iR(uu.features)}`), Fu(`WebGPU adapter limits ${YR(uu.limits,tR)}`), wu(`WebGPU adapter all limits ${YR(uu.limits,null)}`)
          }(uu) : Fu(`WebGPU requestAdapter(${JSON.stringify(null!==(Ru=yu[0])&&void 0!==Ru?Ru:{})}) gave none`);
          return uu
        }))
      })), rR(PR("GPUAdapter"), "requestDevice", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return VR(uu, this, yu).then((uu => (function(uu) {
          Fu(`WebGPU device features ${iR(uu.features)}`), Fu(`WebGPU device limits ${YR(uu.limits,tR)}`), uu.addEventListener("uncapturederror", (uu => {
            if (zR.uncaptured < NR) {
              var Ru, yu, Eu;
              zR.uncaptured++;
              const Ku = uu.error;
              Fu(`WebGPU uncaptured ${null!==(Ru=null===Ku||void 0===Ku||null===(yu=Ku.constructor)||void 0===yu?void 0:yu.name)&&void 0!==Ru?Ru:"error"}: ${Zu(String(null!==(Eu=null===Ku||void 0===Ku?void 0:Ku.message)&&void 0!==Eu?Eu:""),600)}`)
            }
          }));
          const Ru = uu.lost;
          null === Ru || void 0 === Ru || Ru.then((uu => {
            var Ru;
            Fu(`WebGPU device lost (${String(uu.reason)}): ${Zu(String(null!==(Ru=uu.message)&&void 0!==Ru?Ru:""),600)}`)
          }))
        }(uu), uu)), (uu => {
          throw Fu(`WebGPU requestDevice failed: ${String(uu)}`), uu
        }))
      }));
      const uu = PR("GPUDevice");
      rR(uu, "createShaderModule", (uu => function() {
        for (var Ru, yu, Eu = arguments.length, Ku = new Array(Eu), Qu = 0; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
        const mu = VR(uu, this, Ku);
        return function(uu, Ru) {
          const yu = Ru.includes("decodeQuad");
          yu && gR.add(uu);
          const Eu = uu.getCompilationInfo;
          null === Eu || void 0 === Eu || Eu.call(uu).then((uu => {
            if (0 === uu.messages.length && !yu) return;
            const Ru = {};
            for (const yu of uu.messages) {
              var Eu;
              Ru[String(yu.type)] = (null !== (Eu = Ru[String(yu.type)]) && void 0 !== Eu ? Eu : 0) + 1
            }
            const Ku = uu.messages.map((uu => `${String(uu.type)} ${String(uu.lineNum)}:${String(uu.linePos)} ${String(uu.message)}`)).join("\n");
            zR.compile < NR && (zR.compile++, Fu(`WebGPU ${yu?"terrain ":""}shader module compiled: ${JSON.stringify(Ru)}${Ku?` first: ${Zu(Ku.split("\n")[0],300)}`:""}`)), Ku && wu(`WebGPU shader module messages:\n${Zu(Ku)}`)
          }))
        }(mu, String(null !== (Ru = (null !== (yu = Ku[0]) && void 0 !== yu ? yu : {}).code) && void 0 !== Ru ? Ru : "")), mu
      })), rR(uu, "createRenderPipeline", (uu => function() {
        for (var Ru, yu = arguments.length, Eu = new Array(yu), Ku = 0; Ku < yu; Ku++) Eu[Ku] = arguments[Ku];
        const Qu = VR(uu, this, Eu);
        return oR(Qu, null !== (Ru = Eu[0]) && void 0 !== Ru ? Ru : {}), Qu
      })), rR(uu, "createRenderPipelineAsync", (uu => function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return VR(uu, this, yu).then((uu => {
          var Ru;
          return oR(uu, null !== (Ru = yu[0]) && void 0 !== Ru ? Ru : {}), uu
        }), (uu => {
          var Ru;
          throw function(uu, Ru) {
            var yu, Eu, Ku;
            if (zR.rejected >= NR) return;
            zR.rejected++;
            const {
              reason: Qu,
              message: mu
            } = null !== Ru && void 0 !== Ru ? Ru : {}, Ju = String(null !== (yu = (null !== (Eu = uu.vertex) && void 0 !== Eu ? Eu : {}).entryPoint) && void 0 !== yu ? yu : "");
            Fu(`WebGPU pipeline "${String(null!==(Ku=uu.label)&&void 0!==Ku?Ku:"")}" ${Ju} rejected (${String(null!==Qu&&void 0!==Qu?Qu:"no reason")}): ${Zu(String(null!==mu&&void 0!==mu?mu:Ru),600)}`)
          }(null !== (Ru = yu[0]) && void 0 !== Ru ? Ru : {}, uu), uu
        }))
      })), rR(PR("GPUCanvasContext"), "configure", (uu => function() {
        for (var Ru, yu = arguments.length, Eu = new Array(yu), Ku = 0; Ku < yu; Ku++) Eu[Ku] = arguments[Ku];
        const Qu = null !== (Ru = Eu[0]) && void 0 !== Ru ? Ru : {};
        var mu, Ju;
        FR++ < 3 && Fu(`WebGPU canvas ${String(Qu.format)} ${String(null!==(mu=Qu.colorSpace)&&void 0!==mu?mu:"srgb")} alpha ${String(null!==(Ju=Qu.alphaMode)&&void 0!==Ju?Ju:"opaque")}`);
        return VR(uu, this, Eu)
      })), qR(PR("GPURenderPassEncoder")), qR(PR("GPURenderBundleEncoder"))
    }
    const aR = 1e4,
      fR = 6e4,
      uy = 5e3,
      Ry = 3e3,
      yy = 100;
    let Ey = null,
      Ky = !1,
      Qy = {
        ...nR.e
      },
      my = !1,
      Jy = null,
      Ny = 0,
      Xy = () => {};
    const Vy = new Promise((uu => {
      Xy = uu
    }));

    function ry() {
      var uu;
      Ky || (Ky = !0, Qy = Object.assign(window.bloxdRenderDebug ??= {
        ...nR.e
      }, {
        faceCull: "0" === (0, Qu.k)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (uu = (0, Qu.k)("adrenoProbe")) && void 0 !== uu ? uu : ""
      }), Fu("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), BR || "undefined" === typeof window || (BR = !0, "undefined" !== typeof WebGL2RenderingContext && eR(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && eR(WebGLRenderingContext.prototype, !1)), vR(), (0, Qu.c)("renderProbe", (() => {
        Wy("console")
      })), py(), setInterval(Hy, uy))
    }

    function By(uu) {
      var Ru, yu;
      ry(), Ey = null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.backend) && void 0 !== Ru ? Ru : null;
      const Eu = `, renderer param ${null!==(yu=(0,Qu.k)("renderer"))&&void 0!==yu?yu:"none"}, faceCull ${"0"===Qy.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Qy.adrenoProbe||"none"}`;
      Fu(`${(0,sR.e)(uu)}${null===uu?"":Eu}`)
    }

    function xy() {
      const uu = performance.now(),
        Ru = Sy(Vy, aR, fR).then((Ru => Wy(`${Math.round((performance.now()-uu)/1e3)} s after playable${Ru?"":", no terrain drawn yet"}`)));
      (0, Ku.d)(Fu, (async () => {
        await Ru, await Jy
      }))
    }
    async function Sy(uu, Ru, yu) {
      const Ku = (0, Eu.d)(yu).then((() => !1));
      return await (0, Eu.d)(Ru), Promise.race([uu.then((() => !0)), Ku])
    }

    function py() {
      requestAnimationFrame((() => {
        Ny++, py()
      }))
    }

    function Ty() {
      var uu, Ru, yu;
      if (my) return;
      (my = !0, Fu(`renderer caps ${null!==(uu=Qy.caps)&&void 0!==uu?uu:"(not noted)"}; terrain fetch ${null!==(Ru=Qy.fetch)&&void 0!==Ru?Ru:"(not noted)"}`), Qy.adrenoProbe) && Fu(`adrenoProbe ${Qy.adrenoProbe} asked; in force (storage fetch only): ${null!==(yu=Qy.probe)&&void 0!==yu?yu:"(not noted)"}`);
      const Eu = su.context;
      if (Eu) {
        for (const uu of function(uu) {
            var Ru;
            const yu = [],
              Eu = uu.getExtension("WEBGL_debug_renderer_info"),
              Ku = Eu ? uu.getParameter(Eu.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Qu = Eu ? uu.getParameter(Eu.UNMASKED_RENDERER_WEBGL) : "(masked)";
            yu.push(`GL ${String(uu.getParameter(uu.VERSION))} | ${String(uu.getParameter(uu.SHADING_LANGUAGE_VERSION))} | ${String(uu.getParameter(uu.VENDOR))} / ${String(uu.getParameter(uu.RENDERER))}`), yu.push(`GL unmasked ${Ku} / ${Qu}`);
            const mu = [
              ["MAX_TEXTURE_SIZE", uu.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", uu.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", uu.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", uu.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", uu.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", uu.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", uu.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in uu && mu.push(["MAX_UNIFORM_BLOCK_SIZE", uu.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", uu.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", uu.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", uu.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), yu.push(`GL limits ${mu.map((Ru=>{let[yu,Eu]=Ru;return`${yu} ${String(uu.getParameter(Eu))}`})).join(", ")}`);
            const Ju = (Ru, yu) => {
              const Eu = uu.getShaderPrecisionFormat(Ru, uu.HIGH_FLOAT),
                Ku = uu.getShaderPrecisionFormat(Ru, uu.HIGH_INT);
              return `${yu} highp float ${Eu?`${Eu.rangeMin}/${Eu.rangeMax}/${Eu.precision}`:"?"} int ${Ku?`${Ku.rangeMin}/${Ku.rangeMax}/${Ku.precision}`:"?"}`
            };
            yu.push(`GL precision ${Ju(uu.VERTEX_SHADER,"VS")}, ${Ju(uu.FRAGMENT_SHADER,"FS")}`);
            const Nu = uu.getContextAttributes();
            return yu.push(`GL context ${JSON.stringify(Nu)} drawingBuffer ${uu.drawingBufferWidth}x${uu.drawingBufferHeight}${"drawingBufferFormat"in uu?` format 0x${Number(uu.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in uu?` ${String(uu.drawingBufferColorSpace)}`:""}`), yu.push(`GL extensions ${(null!==(Ru=uu.getSupportedExtensions())&&void 0!==Ru?Ru:[]).join(" ")}`), yu
          }(Eu)) Fu(uu);
        ! function() {
          if (!su.context) return;
          let uu = 0,
            Ru = 0;
          for (const [yu, Eu] of Gu) !Eu.gl.isContextLost() && Eu.gl.isProgram(yu) && (Ru++, MR(Eu.gl, yu, Eu), null !== Eu.terrain && uu++);
          Fu(`programs: ${Ru} live of ${Gu.length} linked, ${uu} packed terrain; CPU page copies ${Math.round(su.shadowBytes/1048576)} MiB (${su.uncopied} over budget)`)
        }()
      }
    }

    function Wy(uu) {
      return Jy ??= async function(uu) {
        Ty(), "webgpu" === Ey ? (jy(), "1" === Qy.slotCheck && Fu("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Qy.slotCheck = "1", await
          function(uu) {
            if (null !== ZR) return Promise.resolve();
            const Ru = [];
            return ZR = Ru, new Promise((yu => {
              setTimeout((() => {
                ZR = null, Fu(`WebGPU draw ranges (${uu}): ${Ru.length} terrain draws recorded in a second (first ${XR}; bundles replay without new ones)`);
                for (const uu of Ru) Fu(uu);
                yu()
              }), 1e3)
            }))
          }(uu), await async function() {
            for (let uu = 0;
              "1" === Qy.slotCheck && uu < Ry; uu += yy) await (0, Eu.d)(yy);
            if ("1" === Qy.slotCheck) return void Fu(`slot check: no answer in ${Ry} ms (only the storage fetch has one; a later answer logs on its own)`);
            jy()
          }()) : await mR(uu);
        Fu(`check (${uu}) done: bloxdDebug.save() downloads it all`)
      }(uu).catch((Ru => {
        Fu(`check (${uu}) failed: ${String(Ru)}`)
      })).finally((() => {
        Jy = null
      })), Jy
    }

    function jy() {
      void 0 !== Qy.slotCheck && "1" !== Qy.slotCheck && (Fu(Qy.slotCheck), delete Qy.slotCheck)
    }

    function Hy() {
      const uu = uu => Ny ? (uu / Ny).toFixed(1) : "0",
        Ru = function() {
          const uu = hR;
          return hR = {
            draws: 0,
            faces: 0
          }, uu
        }(),
        yu = function() {
          const uu = WR;
          return WR = {
            inst: {
              draws: 0,
              faces: 0
            },
            tex: {
              draws: 0,
              faces: 0
            },
            other: {
              draws: 0,
              faces: 0
            }
          }, uu
        }(),
        Eu = function() {
          const uu = jR;
          return jR = {
            buffer: 0,
            texture: 0
          }, uu
        }();
      jy(), ("webgpu" === Ey ? Ru.draws : yu.inst.draws + yu.tex.draws) > 0 && Xy();
      const Ku = "webgpu" === Ey ? [`terrain ${uu(Ru.draws)} draws ${uu(Ru.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((uu => yu[uu].draws > 0)).map((Ru => `${Ru} ${uu(yu[Ru].draws)} draws ${uu(yu[Ru].faces)} faces a frame`));
      Fu(`${Ny} frames: ${Ku.join(", ")||"no draws"}; uploaded ${Math.round(Eu.buffer/1024)} KiB to buffers, ${Math.round(Eu.texture/1024)} KiB to data textures`), Ny = 0
    }
  },
  4473: (uu, Ru, yu) => {
    function Eu(uu) {
      if (null === uu) return "backend: none picked (no renderer build)";
      const Ru = uu.adapter ? `${uu.adapter.vendor}/${uu.adapter.architecture}` : "none";
      return `backend ${uu.backend}: reason ${uu.reason}, source ${uu.source}, adapter ${Ru}`
    }
    yu.d(Ru, {
      e: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
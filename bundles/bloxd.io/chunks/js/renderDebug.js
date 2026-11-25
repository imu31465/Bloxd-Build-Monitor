export const id = 49;
export const ids = [49];
export const modules = {
  4872: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(2943);
    const lu = 3e4,
      qu = 1e3;

    function fu() {
      return "visible" === document.visibilityState && "inGame" === su.d.get("gameState") && (0, Zu.w)()
    }

    function Cu(uu, Eu) {
      (0, Xu.r)() || function(uu, Eu, ju) {
        let su = 0;
        const Uu = setInterval((() => {
          Eu() && (su += qu, su >= uu && (clearInterval(Uu), ju()))
        }), qu)
      }(lu, fu, (() => {
        Eu().then((() => {
          uu(`saved for the player after ${lu/1e3} s of play`), (0, Xu.A)(), Uu.h.TY("chat", {
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
  4866: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      installRenderDebug: () => bj,
      renderDebugPlayable: () => Nj,
      startRenderDebug: () => cj,
      waitForDraw: () => Oj
    });
    var su = ju(1866),
      Uu = ju(4872),
      Zu = ju(2943);
    const Xu = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function lu(uu) {
      return 7 & uu
    }

    function qu(uu) {
      return uu >>> 11 & 1
    }

    function fu(uu) {
      return [1 + (uu >>> 18 & 63), 1 + (uu >>> 24 & 63)]
    }

    function Cu(uu, Eu) {
      const [ju, , su] = uu, Uu = lu(su), Zu = function(uu, Eu, ju) {
        return Eu + (1 === (22 >>> uu & 1) ? 4 - ju : ju) & 3
      }(Uu, qu(su), Eu), Xu = Uu >>> 1, [Cu, bu] = fu(ju), cu = 1 === Zu || 2 === Zu ? Cu : 0, Nu = Zu >= 2 ? bu : 0, Ou = [63 & ju, ju >>> 6 & 63, ju >>> 12 & 63];
      return Ou[2 === Xu ? 0 : 2] += cu, Ou[1 === Xu ? 0 : 1] += Nu, Ou
    }

    function bu(uu) {
      const Eu = Math.max(...fu(uu[0]));
      return 1 === Eu ? "1" : Eu <= 4 ? "2-4" : Eu <= 16 ? "5-16" : "17-64"
    }
    const cu = 16;

    function Nu(uu) {
      let Eu = 2166136261;
      for (let ju = 0; ju < uu.length; ju++) Eu = Math.imul(Eu ^ uu[ju], 16777619);
      return Eu >>> 0
    }

    function Ou(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const su = Math.max(0, Eu - ju),
        Uu = Math.min(uu.length, Eu + ju),
        Zu = [];
      for (let Xu = su; Xu < Uu; Xu++) {
        const ju = uu[Xu].toString(16).padStart(2, "0");
        Zu.push(Xu === Eu ? `[${ju}]` : ju)
      }
      return Zu.join(" ")
    }
    const Yu = {
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
      hu = "_vs2fs_location0";
    const Du = 0,
      gu = 4,
      Mu = 6,
      eu = [0, 1, 2, 0, 2, 3],
      Gu = 2048,
      pu = 4,
      wu = 256,
      Ju = 64,
      du = 268435456,
      au = 65536,
      Pu = /^#version [^\n]*\/\/ program (\S+)$/m;

    function ou(uu) {
      return null === uu.name ? `#${uu.id}` : `#${uu.id} ${uu.name}`
    }
    const ku = [],
      mu = new WeakMap,
      vu = new WeakMap,
      Ku = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Vu = 1;
    const ru = new WeakMap;

    function Qu(uu) {
      if (null === uu) return 0;
      let Eu = ru.get(uu);
      return void 0 === Eu && (Eu = Vu++, ru.set(uu, Eu)), Eu
    }
    class iu {
      constructor(uu, Eu) {
        this.print = uu, this.now = Eu, this.shown = 0, this.dl = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.oN = [], this.dropped = 0
      }
      line(uu) {
        const Eu = this.now();
        if (Eu - this.second >= 1e3 && (this.second = Eu, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.dl++, void this.store(uu);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${uu} (the last line here: the rest go to bloxdDebug.save())` : uu)
      }
      keep(uu) {
        this.sections++, this.store(uu)
      }
      store(uu) {
        this.oN.push(`${new Date(Date.now()).toISOString()} ${uu}`), this.oN.length > 2e4 && (this.oN.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.dl} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.oN].join("\n")
      }
    }
    let Wu = null;

    function Su() {
      if (null === Wu) {
        const uu = new iu((uu => {
          (0, Zu.k)("render", uu)
        }), (() => performance.now()));
        (0, Zu.j)("render", (() => uu.dump())), Wu = uu
      }
      return Wu
    }

    function Iu(uu) {
      Su().line(uu)
    }

    function Fu(uu) {
      Su().keep(uu)
    }

    function Bu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return uu.length <= Eu ? uu : `${uu.slice(0,Eu)}... (${uu.length-Eu} more characters)`
    }

    function Lu(uu, Eu, ju, su, Uu, Zu) {
      const Xu = Ku.pendingCheck;
      if (null === Xu) return;
      const lu = "undefined" !== typeof WebGL2RenderingContext && uu instanceof WebGL2RenderingContext,
        qu = {
          gl: uu,
          program: ju,
          call: su,
          HY: Uu,
          instances: Zu,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Xu.draws.push(qu), lu) try {
        const su = function(uu) {
          const Eu = [],
            ju = new Map,
            su = Math.min(16, uu.getParameter(Yu.MAX_VERTEX_ATTRIBS));
          for (let Uu = 0; Uu < su; Uu++) {
            if (!uu.getVertexAttrib(Uu, Yu.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const su = uu.getVertexAttrib(Uu, Yu.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Zu = uu.getVertexAttribOffset(Uu, Yu.VERTEX_ATTRIB_ARRAY_POINTER),
              Xu = uu.getVertexAttrib(Uu, Yu.VERTEX_ATTRIB_ARRAY_STRIDE),
              lu = uu.getVertexAttrib(Uu, Yu.VERTEX_ATTRIB_ARRAY_SIZE),
              qu = uu.getVertexAttrib(Uu, Yu.VERTEX_ATTRIB_ARRAY_TYPE),
              fu = "VERTEX_ATTRIB_ARRAY_INTEGER" in uu && uu.getVertexAttrib(Uu, Yu.VERTEX_ATTRIB_ARRAY_INTEGER),
              Cu = "VERTEX_ATTRIB_ARRAY_DIVISOR" in uu ? uu.getVertexAttrib(Uu, Yu.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            ju.set(Uu, {
              buffer: su,
              offset: Zu,
              stride: Xu
            }), Eu.push(`@${Uu} buf#${Qu(su)} +${Zu} stride ${Xu} ${lu}x0x${qu.toString(16)}${fu?" int":""} div ${Cu}`)
          }
          return {
            lines: Eu,
            byLocation: ju
          }
        }(uu);
        if (qu.attributes = su.lines, "inst" === ju.terrain) {
          const {
            group: Uu,
            chunk: lu
          } = function(uu, Eu, ju) {
            const su = Eu.get(Mu),
              Uu = uu.getVertexAttrib(Mu, Yu.CURRENT_VERTEX_ATTRIB),
              Zu = su ? `+${su.offset}` : Uu ? Array.from(Uu).slice(0, 3).join(",") : "?";
            let Xu = ju.groups.get(Zu);
            return void 0 === Xu && (Xu = ju.groups.size, ju.groups.set(Zu, Xu)), {
              group: Xu,
              chunk: Zu
            }
          }(uu, su.byLocation, Xu);
          qu.group = Uu, qu.chunk = lu;
          for (const uu of [Du, gu]) {
            var fu;
            const Eu = null === (fu = su.byLocation.get(uu)) || void 0 === fu ? void 0 : fu.buffer;
            Eu && qu.pages.push({
              kind: "buf",
              buffer: Eu
            })
          }! function(uu, Eu, ju, su, Uu, Zu, Xu) {
            const lu = su.get(Du),
              qu = Xu.parts.get(Zu);
            if (void 0 === qu && Xu.parts.size >= pu) return;
            const fu = Math.min(Uu, Ju, wu - (null !== qu && void 0 !== qu ? qu : 0));
            if (null === lu || void 0 === lu || !lu.buffer || fu <= 0) return;
            const Cu = tu(uu, Eu, ju);
            if (!Cu) return;
            const bu = lu.stride || 12,
              cu = nu(uu, lu.buffer, lu.offset, (fu - 1) * bu + 12),
              Nu = new DataView(cu.buffer),
              Ou = function(uu, Eu) {
                const ju = function(uu) {
                    const Eu = Ru.get(uu);
                    if (void 0 !== Eu && (null === Eu || uu.isProgram(Eu))) return Eu;
                    Ku.inProbe = !0;
                    let ju = null;
                    try {
                      ju = xu(uu, yu, zu, "fed", "the record feed")
                    } finally {
                      Ku.inProbe = !1
                    }
                    return Ru.set(uu, ju), ju
                  }(uu),
                  su = ju ? Au(uu, ju, Eu, (() => {
                    uu.drawArraysInstanced(Yu.POINTS, 0, 1, Eu)
                  }), "decode probe input (the record feed)") : null;
                return su ? new Uint32Array(su.buffer) : null
              }(uu, fu);
            Ou || Xu.fed.failed++;
            const hu = Au(uu, Cu, 4 * fu, (() => {
              uu.drawArraysInstanced(Yu.POINTS, 0, 4, fu)
            }));
            if (!hu) return;
            Xu.parts.set(Zu, (null !== qu && void 0 !== qu ? qu : 0) + fu);
            for (let Yu = 0; Yu < fu; Yu++) {
              const uu = Yu * bu,
                Eu = [Nu.getUint32(uu, !0), Nu.getUint32(uu + 4, !0), Nu.getUint32(uu + 8, !0)],
                ju = Ou ? [Ou[3 * Yu], Ou[3 * Yu + 1], Ou[3 * Yu + 2]] : Eu;
              Ou && (Xu.fed.records++, ju.some(((uu, ju) => uu !== Eu[ju])) && (Xu.fed.differing++, Xu.fed.first.length < 8 && Xu.fed.first.push(`part ${Zu} instance ${Yu}: fed ${ju.map(UE).join(" ")} buffer ${Eu.map(UE).join(" ")}`)));
              for (let su = 0; su < 4; su++) {
                const uu = 3 * (4 * Yu + su);
                Xu.vertices.push({
                  record: ju,
                  slot: su,
                  group: Zu,
                  gpu: [hu[uu], hu[uu + 1], hu[uu + 2]]
                })
              }
            }
          }(uu, Eu, ju, su.byLocation, Zu, Uu, Xu)
        } else {
          const su = uE(uu, Eu, 16),
            Zu = uE(uu, Eu, 8);
          for (const uu of [su, Zu]) uu && qu.pages.push({
            kind: "tex",
            texture: uu
          });
          su && function(uu, Eu, ju, su, Uu, Zu) {
            if (Zu.parts.size >= pu) return;
            const Xu = tu(uu, Eu, ju);
            if (!Xu) return;
            let lu = 6 * wu;
            const qu = [];
            for (const [Nu, Ou] of Uu) {
              const uu = Math.min(Ou, lu, Math.max(6, 6 * Math.floor(wu / Uu.length)));
              uu > 0 && (qu.push([Nu, uu]), lu -= uu)
            }
            const fu = qu.reduce(((uu, Eu) => {
                let [, ju] = Eu;
                return uu + ju
              }), 0),
              Cu = Au(uu, Xu, fu, (() => {
                for (const [Eu, ju] of qu) uu.drawArrays(Yu.POINTS, Eu, ju)
              }));
            if (!Cu) return;
            let bu = 0;
            for (const [Nu, Ou] of qu) {
              const Eu = Math.floor(Nu / 6),
                ju = Math.floor((Nu + Ou - 1) / 6) - Eu + 1,
                Uu = EE(uu, su, Gu, Eu, ju);
              for (let uu = Nu; uu < Nu + Ou; uu++, bu++) {
                var cu;
                const ju = 4 * (Math.floor(uu / 6) - Eu),
                  su = [Uu[ju], Uu[ju + 1], Uu[ju + 2]];
                Zu.parts.set(Uu[ju + 3], (null !== (cu = Zu.parts.get(Uu[ju + 3])) && void 0 !== cu ? cu : 0) + (uu % 6 === 0 ? 1 : 0)), Zu.vertices.push({
                  record: su,
                  slot: eu[uu % 6],
                  group: Uu[ju + 3],
                  gpu: [Cu[3 * bu], Cu[3 * bu + 1], Cu[3 * bu + 2]]
                })
              }
            }
          }(uu, Eu, ju, su, Uu, Xu)
        }
      } catch (Cu) {
        Iu(`decode probe failed on program ${ou(ju)}: ${String(Cu)}`)
      }
    }

    function tu(uu, Eu, ju) {
      if (void 0 !== ju.probe) return ju.probe && Tu(uu, Eu, ju.probe), ju.probe;
      ju.probe = null, Ku.inProbe = !0;
      try {
        ju.probe = function(uu, Eu) {
          return xu(uu, (ju = Eu.vertex, ju.replace(`\nvec3 ${hu} = vec3(0);\n`, `\nout vec3 ${hu};\n`)), Eu.fragment, hu, `program ${ou(Eu)}'s twin`);
          var ju
        }(uu, ju)
      } finally {
        Ku.inProbe = !1
      }
      return ju.probe && Tu(uu, Eu, ju.probe), ju.probe
    }

    function xu(uu, Eu, ju, su, Uu) {
      const Zu = [uu.createShader(Yu.VERTEX_SHADER), uu.createShader(Yu.FRAGMENT_SHADER)],
        Xu = uu.createProgram();
      if (!Xu || !Zu[0] || !Zu[1]) return null;
      uu.shaderSource(Zu[0], Eu), uu.shaderSource(Zu[1], ju);
      for (const qu of Zu) uu.compileShader(qu), uu.attachShader(Xu, qu);
      uu.transformFeedbackVaryings(Xu, [su], Yu.INTERLEAVED_ATTRIBS), uu.linkProgram(Xu);
      for (const qu of Zu) uu.deleteShader(qu);
      var lu;
      return uu.getProgramParameter(Xu, Yu.LINK_STATUS) ? Xu : (Iu(`decode probe: ${Uu} failed to link: ${Bu(null!==(lu=uu.getProgramInfoLog(Xu))&&void 0!==lu?lu:"",300)}`), uu.deleteProgram(Xu), null)
    }

    function Tu(uu, Eu, ju) {
      const su = uu.getProgramParameter(Eu, Yu.ACTIVE_UNIFORM_BLOCKS);
      for (let lu = 0; lu < su; lu++) {
        const su = uu.getActiveUniformBlockName(Eu, lu),
          Uu = null === su ? Yu.INVALID_INDEX : uu.getUniformBlockIndex(ju, su);
        Uu !== Yu.INVALID_INDEX && uu.uniformBlockBinding(ju, Uu, uu.getActiveUniformBlockParameter(Eu, lu, Yu.UNIFORM_BLOCK_BINDING))
      }
      const Uu = uu.getParameter(Yu.CURRENT_PROGRAM);
      uu.useProgram(ju);
      const Zu = uu.getProgramParameter(Eu, Yu.ACTIVE_UNIFORMS),
        Xu = uu.getActiveUniforms(Eu, [...Array(Zu).keys()], Yu.UNIFORM_BLOCK_INDEX);
      for (let lu = 0; lu < Zu; lu++) {
        const su = uu.getActiveUniform(Eu, lu);
        if (!su || -1 !== Xu[lu]) continue;
        const Uu = su.name.replace(/\[0\]$/, "");
        for (let Zu = 0; Zu < su.size; Zu++) {
          const Xu = su.size > 1 ? `${Uu}[${Zu}]` : su.name,
            lu = uu.getUniformLocation(Eu, Xu),
            qu = uu.getUniformLocation(ju, Xu);
          lu && qu && Hu(uu, qu, su.type, uu.getUniform(Eu, lu))
        }
      }
      uu.useProgram(Uu)
    }

    function Hu(uu, Eu, ju, su) {
      const Uu = ArrayBuffer.isView(su) ? Array.from(su) : [Number(su)];
      switch (ju) {
        case Yu.FLOAT:
          return void uu.uniform1f(Eu, Uu[0]);
        case Yu.FLOAT_VEC2:
          return void uu.uniform2fv(Eu, Uu);
        case Yu.FLOAT_VEC3:
          return void uu.uniform3fv(Eu, Uu);
        case Yu.FLOAT_VEC4:
          return void uu.uniform4fv(Eu, Uu);
        case Yu.FLOAT_MAT3:
          return void uu.uniformMatrix3fv(Eu, !1, Uu);
        case Yu.FLOAT_MAT4:
          return void uu.uniformMatrix4fv(Eu, !1, Uu);
        case Yu.UNSIGNED_INT:
          return void uu.uniform1ui(Eu, Uu[0]);
        case Yu.UNSIGNED_INT_VEC2:
          return void uu.uniform2uiv(Eu, Uu);
        case Yu.UNSIGNED_INT_VEC3:
          return void uu.uniform3uiv(Eu, Uu);
        case Yu.UNSIGNED_INT_VEC4:
          return void uu.uniform4uiv(Eu, Uu);
        case Yu.INT_VEC2:
          return void uu.uniform2iv(Eu, Uu);
        case Yu.INT_VEC3:
          return void uu.uniform3iv(Eu, Uu);
        case Yu.INT_VEC4:
          return void uu.uniform4iv(Eu, Uu);
        default:
          uu.uniform1i(Eu, Uu[0])
      }
    }

    function Au(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Zu = uu.getParameter(Yu.CURRENT_PROGRAM),
        Xu = uu.getParameter(Yu.TRANSFORM_FEEDBACK_BINDING),
        lu = uu.getParameter(Yu.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        qu = uu.getParameter(Yu.COPY_READ_BUFFER_BINDING),
        fu = uu.isEnabled(Yu.RASTERIZER_DISCARD),
        Cu = uu.createTransformFeedback(),
        bu = uu.createBuffer();
      Ku.inProbe = !0;
      try {
        const Zu = uu.getError();
        Zu !== Yu.NO_ERROR && Iu(`GL error 0x${Zu.toString(16)} pending before the decode probe (the renderer's)`), uu.useProgram(Eu), uu.bindTransformFeedback(Yu.TRANSFORM_FEEDBACK, Cu), uu.bindBuffer(Yu.TRANSFORM_FEEDBACK_BUFFER, bu), uu.bufferData(Yu.TRANSFORM_FEEDBACK_BUFFER, 12 * ju, Yu.STREAM_READ), uu.bindBufferBase(Yu.TRANSFORM_FEEDBACK_BUFFER, 0, bu), uu.enable(Yu.RASTERIZER_DISCARD), uu.beginTransformFeedback(Yu.POINTS), su(), uu.endTransformFeedback(), uu.bindBufferBase(Yu.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Xu = uu.getError();
        if (Xu !== Yu.NO_ERROR) return Iu(`${Uu}: GL error 0x${Xu.toString(16)} on the feedback draw`), null;
        const lu = new Float32Array(3 * ju);
        return uu.bindBuffer(Yu.COPY_READ_BUFFER, bu), uu.getBufferSubData(Yu.COPY_READ_BUFFER, 0, lu), lu
      } finally {
        fu || uu.disable(Yu.RASTERIZER_DISCARD), uu.bindTransformFeedback(Yu.TRANSFORM_FEEDBACK, Xu), uu.bindBuffer(Yu.TRANSFORM_FEEDBACK_BUFFER, lu), uu.bindBuffer(Yu.COPY_READ_BUFFER, qu), uu.deleteTransformFeedback(Cu), uu.deleteBuffer(bu), uu.useProgram(Zu), Ku.inProbe = !1
      }
    }

    function nu(uu, Eu, ju, su) {
      const Uu = uu.getParameter(Yu.COPY_READ_BUFFER_BINDING),
        Zu = new Uint8Array(su);
      return uu.bindBuffer(Yu.COPY_READ_BUFFER, Eu), uu.getBufferSubData(Yu.COPY_READ_BUFFER, ju, Zu), uu.bindBuffer(Yu.COPY_READ_BUFFER, Uu), Zu
    }
    const yu = `#version 300 es\nlayout(location = ${Du}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      zu = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      Ru = new WeakMap;

    function uE(uu, Eu, ju) {
      const su = uu.getProgramParameter(Eu, Yu.ACTIVE_UNIFORMS),
        Uu = uu.getParameter(Yu.ACTIVE_TEXTURE);
      try {
        for (let Uu = 0; Uu < su; Uu++) {
          const su = uu.getActiveUniform(Eu, Uu);
          if ((null === su || void 0 === su ? void 0 : su.type) !== Yu.UNSIGNED_INT_SAMPLER_2D) continue;
          const Zu = uu.getUniformLocation(Eu, su.name),
            Xu = Zu ? uu.getUniform(Eu, Zu) : -1;
          if (Xu < 0) continue;
          uu.activeTexture(Yu.TEXTURE0 + Xu);
          const lu = uu.getParameter(Yu.TEXTURE_BINDING_2D);
          if (lu && vu.get(lu) === ju) return lu
        }
        return null
      } finally {
        uu.activeTexture(Uu)
      }
    }

    function EE(uu, Eu, ju, su, Uu) {
      const Zu = new Uint32Array(4 * Uu),
        Xu = uu.getParameter(Yu.READ_FRAMEBUFFER_BINDING),
        lu = uu.createFramebuffer();
      uu.bindFramebuffer(Yu.READ_FRAMEBUFFER, lu), uu.framebufferTexture2D(Yu.READ_FRAMEBUFFER, Yu.COLOR_ATTACHMENT0, Yu.TEXTURE_2D, Eu, 0);
      try {
        let Eu = 0;
        for (; Eu < Uu;) {
          const Xu = su + Eu,
            lu = Xu % ju,
            qu = Math.min(Uu - Eu, ju - lu);
          uu.readPixels(lu, Math.floor(Xu / ju), qu, 1, Yu.RGBA_INTEGER, Yu.UNSIGNED_INT, Zu.subarray(4 * Eu, 4 * (Eu + qu))), Eu += qu
        }
      } finally {
        uu.bindFramebuffer(Yu.READ_FRAMEBUFFER, Xu), uu.deleteFramebuffer(lu)
      }
      return Zu
    }

    function jE(uu, Eu, ju) {
      let su = 0,
        Uu = 0;
      for (let qu = 0; qu < Eu.bytes.length; qu += au) {
        su++;
        const uu = Math.min(qu + au, Eu.bytes.length);
        Nu(Eu.bytes.subarray(qu, uu)) !== Nu(ju.subarray(qu, uu)) && Uu++
      }
      const Zu = `${uu} ${Eu.bytes.length} B cpu ${Nu(Eu.bytes).toString(16)} gpu ${Nu(ju).toString(16)}, ${Uu}/${su} blocks differ${Eu.missed?`, ${Eu.missed} GPU-side writes uncopied`:""}`;
      if (0 === Uu) return Zu;
      const {
        count: Xu,
        offsets: lu
      } = function(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const su = Math.min(uu.length, Eu.length);
        let Uu = Math.abs(uu.length - Eu.length);
        const Zu = [];
        for (let Xu = 0; Xu < su; Xu++) uu[Xu] !== Eu[Xu] && (Uu++, Zu.length < ju && Zu.push(Xu));
        return {
          count: Uu,
          offsets: Zu
        }
      }(Eu.bytes, ju);
      return Fu([`${Zu}: ${Xu} bytes differ`, ...lu.map((uu => `  +${uu}: cpu ${Ou(Eu.bytes,uu)} | gpu ${Ou(ju,uu)}`))].join("\n")), `${Zu}: ${Xu} bytes differ, first at ${lu.join(", ")} (context in the saved file)`
    }

    function sE(uu) {
      if (0 === uu.vertices.length) return void Iu(`decode probe (${uu.reason}): no terrain draw probed (${uu.draws.length} seen)`);
      const Eu = function(uu) {
          const Eu = new Map;
          for (const su of uu) {
            const uu = Eu.get(su.group);
            uu ? uu.push(su) : Eu.set(su.group, [su])
          }
          const ju = {
            vertices: uu.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [su, Uu] of Eu) {
            const uu = new Map,
              Eu = Uu.map((Eu => {
                const ju = Cu(Eu.record, Eu.slot),
                  su = [Eu.gpu[0] - ju[0], Eu.gpu[1] - ju[1], Eu.gpu[2] - ju[2]],
                  Uu = su.map((uu => Math.round(64 * uu))).join(","),
                  Zu = uu.get(Uu);
                return Zu ? Zu.count++ : uu.set(Uu, {
                  count: 1,
                  offset: su
                }), ju
              }));
            let Zu = [0, 0, 0],
              Xu = 0;
            for (const ju of uu.values()) ju.count > Xu && (Xu = ju.count, Zu = ju.offset);
            ju.translations.set(su, Zu), Uu.forEach(((uu, su) => {
              var Uu;
              const Xu = [Eu[su][0] + Zu[0], Eu[su][1] + Zu[1], Eu[su][2] + Zu[2]];
              if (Xu.every(((Eu, ju) => {
                  return su = uu.gpu[ju], Uu = Eu, Math.abs(su - Uu) <= Math.max(.001, 1e-6 * Math.abs(Uu));
                  var su, Uu
                }))) return;
              ju.mismatches++, ju.byDirection[lu(uu.record[2])]++, ju.byDiagonal[qu(uu.record[2])]++;
              const fu = bu(uu.record);
              ju.byBand[fu] = (null !== (Uu = ju.byBand[fu]) && void 0 !== Uu ? Uu : 0) + 1, ju.first.length < cu && ju.first.push({
                ...uu,
                expected: Xu
              })
            }))
          }
          return ju
        }(uu.vertices),
        ju = Eu.byDirection.map(((uu, Eu) => uu ? `${Xu[Eu]} ${uu}` : "")).filter(Boolean).join(" "),
        su = Object.entries(Eu.byBand).map((uu => {
          let [Eu, ju] = uu;
          return `${Eu}: ${ju}`
        })).join(" ");
      if (Iu(`decode probe (${uu.reason}): ${Eu.mismatches}/${Eu.vertices} vertices differ from the CPU decode over ${uu.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Eu.mismatches ? ` by direction [${ju}] diagonal [0: ${Eu.byDiagonal[0]} 1: ${Eu.byDiagonal[1]}] extent [${su}]` : "")), uu.fed.records > 0 || uu.fed.failed > 0) {
        Iu(`decode probe input: ${uu.fed.differing}/${uu.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (uu.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (uu.fed.failed ? `; the feed failed on ${uu.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Eu of uu.fed.first) Iu(`  ${Eu}`)
      }
      for (const Uu of Eu.first) {
        const [uu, Eu, ju] = Uu.record;
        Iu(`  mismatch part ${Uu.group} r0 ${uu.toString(16)} r1 ${Eu.toString(16)} r2 ${ju.toString(16)} slot ${Uu.slot} (${Xu[lu(ju)]}): expected ${Uu.expected.map(ZE).join(",")} gpu ${Uu.gpu.map(ZE).join(",")}`)
      }
      Fu(`decode probe translations: ${[...Eu.translations].map((uu=>{let[Eu,ju]=uu;return`${Eu}: ${ju.map(ZE).join(",")}`})).join("; ")}`)
    }

    function UE(uu) {
      return uu.toString(16)
    }

    function ZE(uu) {
      return Number.isInteger(uu) ? String(uu) : uu.toFixed(3)
    }

    function XE(uu) {
      return null !== Ku.pendingCheck ? Promise.resolve() : new Promise((Eu => {
        let ju = !1;
        const su = {
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
        Ku.pendingCheck = su;
        const Uu = () => {
            Ku.pendingCheck = null;
            try {
              ! function(uu) {
                Iu(`draw ranges (${uu.reason}): ${uu.terrainDraws} terrain draws in the frame, the first ${uu.draws.length} here`);
                for (const Eu of uu.draws) {
                  const uu = Eu.HY.slice(0, 8).map((uu => {
                      let [Eu, ju] = uu;
                      return `${Eu}+${ju}`
                    })).join(" "),
                    ju = Eu.HY.length > 8 ? ` (+${Eu.HY.length-8} ranges)` : "";
                  Iu(`  ${ou(Eu.program)} ${Eu.program.terrain} ${Eu.call} ${uu}${ju} x${Eu.instances}${Eu.group>=0?` part ${Eu.group} chunk ${Eu.chunk}`:""} | ${Eu.attributes.join(" | ")}`)
                }
              }(su), sE(su);
              su.draws.some((uu => "undefined" !== typeof WebGL2RenderingContext && uu.gl instanceof WebGL2RenderingContext)) || 0 === su.draws.length ? function(uu) {
                const Eu = [],
                  ju = new Map;
                for (const su of uu)
                  if ("undefined" !== typeof WebGL2RenderingContext && su.gl instanceof WebGL2RenderingContext)
                    for (const uu of su.pages) ju.set("buf" === uu.kind ? uu.buffer : uu.texture, {
                      page: uu,
                      gl: su.gl
                    });
                for (const [su, {
                    page: Uu,
                    gl: Zu
                  }] of ju) {
                  const uu = mu.get(su);
                  if (!uu) {
                    Eu.push(`${Uu.kind}#${Qu(su)}: no CPU copy (${Ku.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Uu.kind) {
                    Eu.push(jE(`buf#${uu.id}`, uu, nu(Zu, Uu.buffer, 0, uu.bytes.length)));
                    continue
                  }
                  const ju = EE(Zu, Uu.texture, uu.width, 0, uu.width * uu.height),
                    Xu = 16 === uu.texelBytes ? new Uint8Array(ju.buffer) : new Uint8Array(new Uint16Array(ju).buffer);
                  Eu.push(jE(`tex#${uu.id} (${16===uu.texelBytes?"records":"light"})`, uu, Xu))
                }
                for (const su of Eu) Iu(`page readback ${su}`)
              }(su.draws) : Iu("page readback: none on WebGL1 (no buffer readback)")
            } catch (uu) {
              Iu(`check failed: ${String(uu)}`)
            }
            Eu()
          },
          Zu = () => {
            if (su.draws.length > 0 && !ju) return ju = !0, void setTimeout(Uu, 0);
            ju || requestAnimationFrame(Zu)
          };
        requestAnimationFrame(Zu), setTimeout((() => {
          ju || (ju = !0, Uu())
        }), 5e3)
      }))
    }
    var lE = ju(4874);
    const qE = 20,
      fE = 24,
      CE = Reflect.apply;

    function bE(uu, Eu, ju) {
      if (!uu) return;
      const su = uu[Eu];
      if ("function" === typeof su) {
        const Uu = ju(su);
        uu[Eu] = Uu, (0, lE.z)(Uu, su)
      }
    }
    let cE = !1;
    const NE = new WeakMap,
      OE = new WeakMap,
      YE = new WeakMap,
      hE = {
        gl: 0,
        lost: 0
      };
    let DE = {
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
      gE = {
        buffer: 0,
        texture: 0
      },
      ME = 0;

    function eE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (uu instanceof ArrayBuffer) return new Uint8Array(uu, Eu, ju || void 0);
      if (!ArrayBuffer.isView(uu)) return null;
      const su = "BYTES_PER_ELEMENT" in uu ? uu.BYTES_PER_ELEMENT : 1,
        Uu = uu.byteOffset + Eu * su,
        Zu = ju ? ju * su : uu.byteLength - Eu * su;
      return new Uint8Array(uu.buffer, Uu, Math.max(0, Zu))
    }

    function GE(uu, Eu) {
      const ju = function(uu) {
        switch (uu) {
          case Yu.ARRAY_BUFFER:
            return Yu.ARRAY_BUFFER_BINDING;
          case Yu.ELEMENT_ARRAY_BUFFER:
            return Yu.ELEMENT_ARRAY_BUFFER_BINDING;
          case Yu.COPY_READ_BUFFER:
            return Yu.COPY_READ_BUFFER_BINDING;
          case Yu.COPY_WRITE_BUFFER:
            return Yu.COPY_WRITE_BUFFER_BINDING;
          case Yu.UNIFORM_BUFFER:
            return Yu.UNIFORM_BUFFER_BINDING;
          case Yu.PIXEL_UNPACK_BUFFER:
            return Yu.PIXEL_UNPACK_BUFFER_BINDING;
          case Yu.TRANSFORM_FEEDBACK_BUFFER:
            return Yu.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Eu);
      return ju ? uu.getParameter(ju) : null
    }

    function pE(uu) {
      const Eu = mu.get(uu);
      Eu && (Ku.shadowBytes -= Eu.bytes.length, mu.delete(uu))
    }

    function wE(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      pE(uu), Ku.shadowBytes + Eu > du ? Ku.uncopied++ : (Ku.shadowBytes += Eu, mu.set(uu, {
        id: Qu(uu),
        bytes: new Uint8Array(Eu),
        width: ju,
        height: su,
        texelBytes: Uu,
        missed: 0
      }))
    }

    function JE(uu, Eu) {
      for (const ju of ["deleteBuffer", "deleteTexture"]) bE(uu, ju, (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return ju[0] && pE(ju[0]), CE(uu, this, ju)
      }));
      bE(uu, "shaderSource", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return ju[0] && "string" === typeof ju[1] && NE.set(ju[0], ju[1]), CE(uu, this, ju)
      })), bE(uu, "attachShader", (uu => function() {
        for (var Eu, ju = arguments.length, su = new Array(ju), Uu = 0; Uu < ju; Uu++) su[Uu] = arguments[Uu];
        const Zu = su[0],
          Xu = null !== (Eu = OE.get(Zu)) && void 0 !== Eu ? Eu : [];
        return Xu.push(su[1]), OE.set(Zu, Xu), CE(uu, this, su)
      })), bE(uu, "linkProgram", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        const Uu = CE(uu, this, ju);
        return Ku.inProbe || function(uu, Eu) {
          var ju, su, Uu;
          "undefined" !== typeof HTMLCanvasElement && uu.canvas instanceof HTMLCanvasElement && function(uu) {
            if (mE.has(uu)) return;
            mE.add(uu);
            for (const Eu of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) uu.addEventListener(Eu, (uu => {
              hE.lost < qE && (hE.lost++, Iu(`${Eu}${"statusMessage"in uu?`: ${String(uu.statusMessage)}`:""}`))
            }))
          }(uu.canvas);
          Ku.context ??= uu;
          const Zu = null !== (ju = OE.get(Eu)) && void 0 !== ju ? ju : [];
          let Xu = "",
            lu = "";
          for (const Cu of Zu) {
            var qu;
            const uu = null !== (qu = NE.get(Cu)) && void 0 !== qu ? qu : "";
            /\bgl_Position\b/.test(uu) ? Xu = uu : lu = uu
          }
          const fu = {
            id: Qu(Eu),
            name: null !== (su = null === (Uu = Pu.exec(Xu)) || void 0 === Uu ? void 0 : Uu[1]) && void 0 !== su ? su : null,
            gl: uu,
            vertex: Xu,
            fragment: lu,
            terrain: aE(Xu),
            checked: !1,
            firstDraw: !1
          };
          if (YE.set(Eu, fu), ku.push([Eu, fu]), null !== fu.terrain) {
            const Eu = Zu.map((Eu => {
              var ju;
              return null !== (ju = uu.getShaderInfoLog(Eu)) && void 0 !== ju ? ju : ""
            })).filter((uu => "" !== uu.trim()));
            Eu.length > 0 && Fu(`program ${ou(fu)} (${fu.terrain}) shader logs:\n${Bu(Eu.join("\n"))}`)
          }
        }(this, ju[0]), Uu
      })), bE(uu, "bufferData", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        const Uu = CE(uu, this, ju);
        if (!Ku.inProbe) {
          const uu = GE(this, ju[0]);
          if (uu) {
            var Zu, Xu, lu;
            const Eu = "number" === typeof ju[1] ? null : eE(ju[1], null !== (Zu = ju[3]) && void 0 !== Zu ? Zu : 0, null !== (Xu = ju[4]) && void 0 !== Xu ? Xu : 0);
            var qu;
            if (wE(uu, "number" === typeof ju[1] ? ju[1] : null !== (lu = null === Eu || void 0 === Eu ? void 0 : Eu.length) && void 0 !== lu ? lu : 0), Eu) null === (qu = mu.get(uu)) || void 0 === qu || qu.bytes.set(Eu)
          }
        }
        return Uu
      })), bE(uu, "bufferSubData", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        const Uu = CE(uu, this, ju);
        if (!Ku.inProbe) {
          var Zu, Xu;
          const uu = GE(this, ju[0]),
            Eu = uu ? mu.get(uu) : void 0,
            su = eE(ju[2], null !== (Zu = ju[3]) && void 0 !== Zu ? Zu : 0, null !== (Xu = ju[4]) && void 0 !== Xu ? Xu : 0);
          if (Eu && su) {
            const uu = ju[1];
            Eu.bytes.set(su.subarray(0, Math.max(0, Eu.bytes.length - uu)), uu), dE("buffer", Eu, uu, su.length)
          }
        }
        return Uu
      })), Eu && (bE(uu, "copyBufferSubData", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        const Uu = CE(uu, this, ju);
        if (!Ku.inProbe) {
          const [uu, Eu, su, Uu, Zu] = ju, Xu = GE(this, uu), lu = GE(this, Eu), qu = Xu ? mu.get(Xu) : void 0, fu = lu ? mu.get(lu) : void 0;
          fu && (qu ? fu.bytes.set(qu.bytes.slice(su, su + Zu), Uu) : fu.missed++)
        }
        return Uu
      })), bE(uu, "texStorage2D", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        const Uu = CE(uu, this, ju),
          [, , Zu, Xu, lu] = ju;
        if (!Ku.inProbe && (Zu === Yu.RGBA32UI || Zu === Yu.RGBA16UI)) {
          const uu = this.getParameter(Yu.TEXTURE_BINDING_2D),
            Eu = Zu === Yu.RGBA32UI ? 16 : 8;
          uu && (vu.set(uu, Eu), wE(uu, Xu * lu * Eu, Xu, lu, Eu))
        }
        return Uu
      })), bE(uu, "texSubImage2D", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        const Uu = CE(uu, this, ju);
        return !Ku.inProbe && ju.length >= 9 && ju[0] === Yu.TEXTURE_2D && 0 === ju[1] && function(uu, Eu) {
          var ju;
          const su = uu.getParameter(Yu.TEXTURE_BINDING_2D),
            Uu = su ? mu.get(su) : void 0;
          if (!Uu) return;
          const [, , Zu, Xu, lu, qu] = Eu;
          let fu = eE(Eu[8], null !== (ju = Eu[9]) && void 0 !== ju ? ju : 0);
          if (null === fu && "number" === typeof Eu[8]) {
            const ju = GE(uu, Yu.PIXEL_UNPACK_BUFFER),
              su = ju ? mu.get(ju) : void 0;
            fu = su ? su.bytes.subarray(Eu[8]) : null
          }
          if (null === fu) return void Uu.missed++;
          const Cu = uu.getParameter(Yu.UNPACK_ROW_LENGTH) || lu,
            bu = uu.getParameter(Yu.UNPACK_SKIP_ROWS),
            cu = uu.getParameter(Yu.UNPACK_SKIP_PIXELS),
            Nu = Uu.texelBytes;
          for (let Ou = 0; Ou < qu; Ou++) {
            const uu = ((bu + Ou) * Cu + cu) * Nu,
              Eu = ((Xu + Ou) * Uu.width + Zu) * Nu;
            Uu.bytes.set(fu.subarray(uu, uu + lu * Nu), Eu)
          }
          dE("texture", Uu, (Xu * Uu.width + Zu) * Nu, lu * qu * Nu)
        }(this, ju), Uu
      })), bE(uu, "copyTexSubImage2D", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        const Uu = ju[0] === Yu.TEXTURE_2D ? this.getParameter(Yu.TEXTURE_BINDING_2D) : null,
          Zu = Uu ? mu.get(Uu) : void 0;
        return Zu && Zu.missed++, CE(uu, this, ju)
      })));
      for (const ju of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) bE(uu, ju, (uu => function() {
        for (var Eu = arguments.length, su = new Array(Eu), Uu = 0; Uu < Eu; Uu++) su[Uu] = arguments[Uu];
        const Zu = CE(uu, this, su);
        return Ku.inProbe || oE(this, ju, su), Zu
      }));
      bE(uu, "getExtension", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        const Uu = CE(uu, this, ju);
        return Uu && "object" === typeof Uu && function(uu, Eu, ju) {
          const su = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Eu in su) || ju.bloxdRenderDebug) return;
          ju.bloxdRenderDebug = !0;
          for (const Uu of su[Eu]) {
            const Eu = ju[Uu];
            "function" === typeof Eu && (ju[Uu] = function() {
              for (var su = arguments.length, Zu = new Array(su), Xu = 0; Xu < su; Xu++) Zu[Xu] = arguments[Xu];
              const lu = CE(Eu, ju, Zu);
              return Ku.inProbe || oE(uu, Uu, Zu), lu
            })
          }
        }(this, ju[0], Uu), Uu
      }))
    }

    function dE(uu, Eu, ju, su) {
      gE[uu] += su, ME < 32 && Eu.bytes.length >= 1 << 20 && (ME++, Fu(`upload ${uu} #${Eu.id} +${ju} ${su} B`))
    }

    function aE(uu) {
      if (!uu.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(uu) || /in uvec3 _p2vs_location0\b/.test(uu) ? "inst" : "tex"
    }

    function PE(uu, Eu, ju) {
      var su;
      if (ju.checked) return;
      ju.checked = !0;
      const Uu = uu.getProgramParameter(Eu, Yu.LINK_STATUS),
        Zu = (null !== (su = uu.getProgramInfoLog(Eu)) && void 0 !== su ? su : "").trim();
      var Xu;
      null === ju.terrain && Uu || (Iu(`program ${ou(ju)} ${null!==(Xu=ju.terrain)&&void 0!==Xu?Xu:"other"} link ${Uu?"ok":"FAILED"}${Zu?`: ${Bu(Zu,300)}`:""}`), Zu && Fu(`program ${ou(ju)} link log:\n${Bu(Zu)}`))
    }

    function oE(uu, Eu, ju) {
      var su;
      const Uu = uu.getParameter(Yu.CURRENT_PROGRAM),
        Zu = Uu ? YE.get(Uu) : void 0;
      if (!Uu || !Zu) return;
      const Xu = null !== (su = Zu.terrain) && void 0 !== su ? su : "other",
        {
          HY: lu,
          instances: qu
        } = function(uu, Eu) {
          switch (uu) {
            case "drawArrays":
              return {
                HY: [
                  [Eu[1], Eu[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                HY: [
                  [Eu[1], Eu[2]]
                ], instances: Eu[3]
              };
            case "drawElements":
              return {
                HY: [
                  [0, Eu[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                HY: [
                  [0, Eu[1]]
                ], instances: Eu[4]
              };
            case "multiDrawArraysWEBGL": {
              const uu = Eu[1],
                ju = Eu[3],
                su = Eu[2],
                Uu = Eu[4],
                Zu = [];
              for (let Xu = 0; Xu < Eu[5]; Xu++) Zu.push([uu[su + Xu], ju[Uu + Xu]]);
              return {
                HY: Zu,
                instances: 1
              }
            }
            default:
              return {
                HY: [], instances: 0
              }
          }
        }(Eu, ju),
        fu = "inst" === Zu.terrain ? qu : lu.reduce(((uu, Eu) => {
          let [, ju] = Eu;
          return uu + ju
        }), 0) / 6;
      if (DE[Xu].draws++, DE[Xu].faces += fu, null === Zu.terrain) return;
      if (Ku.context = uu, !Zu.firstDraw) {
        Zu.firstDraw = !0, PE(uu, Uu, Zu), kE || (kE = !0, Iu(function(uu) {
          var Eu;
          const ju = uu.getParameter(Yu.DEPTH_FUNC),
            su = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Uu = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in uu && uu.getParameter(Yu.DRAW_FRAMEBUFFER_BINDING)) {
            const Eu = uu;
            Uu = Eu.getFramebufferAttachmentParameter(Yu.DRAW_FRAMEBUFFER, Yu.DEPTH_ATTACHMENT, Yu.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Eu.getFramebufferAttachmentParameter(Yu.DRAW_FRAMEBUFFER,Yu.DEPTH_ATTACHMENT,Yu.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Eu.getFramebufferAttachmentParameter(Yu.DRAW_FRAMEBUFFER,Yu.DEPTH_ATTACHMENT,Yu.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Zu = uu.getParameter(Yu.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Eu=su[ju])&&void 0!==Eu?Eu:`0x${ju.toString(16)}`} clear ${Zu}${516===ju||518===ju?" (reverse-Z)":""}, samples ${String(uu.getParameter(Yu.SAMPLES))}, ${Uu}`
        }(uu)));
        const ju = uu.getError();
        ju !== Yu.NO_ERROR && hE.gl < qE && (hE.gl++, Iu(`GL error 0x${ju.toString(16)} after program ${ou(Zu)}'s first terrain draw (${Eu})`))
      }
      const Cu = Ku.pendingCheck;
      null !== Cu && (Cu.terrainDraws++, Cu.draws.length < fE && Lu(uu, Uu, Zu, Eu, lu, qu))
    }
    let kE = !1;
    const mE = new WeakSet;
    var vE = ju(4698),
      KE = ju(4881);
    const VE = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let rE = !1;
    const QE = new WeakSet,
      iE = new WeakMap,
      WE = new WeakMap,
      SE = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let IE = 0,
      FE = !1,
      BE = null,
      LE = {
        draws: 0,
        faces: 0
      };

    function tE(uu) {
      const Eu = globalThis[uu];
      return null === Eu || void 0 === Eu ? void 0 : Eu.prototype
    }

    function xE(uu) {
      return uu && "function" === typeof uu[Symbol.iterator] ? [...uu].sort().join(" ") : ""
    }

    function TE(uu, Eu) {
      const ju = null !== uu && void 0 !== uu ? uu : {},
        su = null !== Eu && void 0 !== Eu ? Eu : Object.keys(Object.getPrototypeOf(ju)).concat(Object.keys(ju));
      return [...new Set(su)].filter((uu => "number" === typeof ju[uu])).map((uu => `${uu} ${String(ju[uu])}`)).join(", ")
    }

    function HE(uu, Eu) {
      var ju;
      const su = null !== (ju = Eu.vertex) && void 0 !== ju ? ju : {};
      if (su.module && QE.has(su.module)) {
        var Uu;
        const ju = String(null !== (Uu = su.entryPoint) && void 0 !== Uu ? Uu : "");
        if (ju.startsWith("vs_packed") && iE.set(uu, ju), !FE) {
          var Zu, Xu, lu, qu, fu;
          FE = !0;
          const uu = null !== (Zu = Eu.depthStencil) && void 0 !== Zu ? Zu : {},
            su = null !== (Xu = Eu.multisample) && void 0 !== Xu ? Xu : {},
            Uu = String(null !== (lu = uu.depthCompare) && void 0 !== lu ? lu : "");
          Iu(`WebGPU terrain pipeline ${ju}: depth ${String(null!==(qu=uu.format)&&void 0!==qu?qu:"none")} ${Uu}${Uu.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(fu=su.count)&&void 0!==fu?fu:1)}`)
        }
      }
    }

    function AE(uu) {
      bE(uu, "setPipeline", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return WE.set(this, ju[0]), CE(uu, this, ju)
      }));
      for (const Eu of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) bE(uu, Eu, (uu => function() {
        const ju = WE.get(this),
          su = ju ? iE.get(ju) : void 0;
        for (var Uu = arguments.length, Zu = new Array(Uu), Xu = 0; Xu < Uu; Xu++) Zu[Xu] = arguments[Xu];
        return void 0 !== su && nE(Eu, su, Zu), CE(uu, this, Zu)
      }))
    }

    function nE(uu, Eu, ju) {
      var su;
      (LE.draws++, "draw" === uu || "drawIndexed" === uu) && (LE.faces += ju[0] * (null !== (su = ju[1]) && void 0 !== su ? su : 1) / 6);
      if (null !== BE && BE.length < fE) {
        const su = ("draw" === uu ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === uu ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Eu, su) => {
          const Uu = uu.endsWith("Indirect") ? ju[1] : ju[su];
          return `${Eu} ${String(null!==Uu&&void 0!==Uu?Uu:"instances"===Eu?1:0)}`
        }));
        BE.push(`  ${Eu} ${uu} ${su.join(" ")}`)
      }
    }

    function yE() {
      if (rE || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      rE = !0, bE(tE("GPU"), "requestAdapter", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return CE(uu, this, ju).then((uu => {
          var Eu;
          uu ? function(uu) {
            var Eu;
            const ju = null !== (Eu = uu.info) && void 0 !== Eu ? Eu : {};
            Iu(`WebGPU adapter ${["vendor","architecture","device","description"].map((uu=>{var Eu;return`${uu} "${String(null!==(Eu=ju[uu])&&void 0!==Eu?Eu:"")}"`})).join(" ")}${uu.isFallbackAdapter?" (fallback)":""}`), Iu(`WebGPU adapter features ${xE(uu.features)}`), Iu(`WebGPU adapter limits ${TE(uu.limits,VE)}`), Fu(`WebGPU adapter all limits ${TE(uu.limits,null)}`)
          }(uu) : Iu(`WebGPU requestAdapter(${JSON.stringify(null!==(Eu=ju[0])&&void 0!==Eu?Eu:{})}) gave none`);
          return uu
        }))
      })), bE(tE("GPUAdapter"), "requestDevice", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return CE(uu, this, ju).then((uu => (function(uu) {
          Iu(`WebGPU device features ${xE(uu.features)}`), Iu(`WebGPU device limits ${TE(uu.limits,VE)}`), uu.addEventListener("uncapturederror", (uu => {
            if (SE.uncaptured < qE) {
              var Eu, ju, su;
              SE.uncaptured++;
              const Uu = uu.error;
              Iu(`WebGPU uncaptured ${null!==(Eu=null===Uu||void 0===Uu||null===(ju=Uu.constructor)||void 0===ju?void 0:ju.name)&&void 0!==Eu?Eu:"error"}: ${Bu(String(null!==(su=null===Uu||void 0===Uu?void 0:Uu.message)&&void 0!==su?su:""),600)}`)
            }
          }));
          const Eu = uu.lost;
          null === Eu || void 0 === Eu || Eu.then((uu => {
            var Eu;
            Iu(`WebGPU device lost (${String(uu.reason)}): ${Bu(String(null!==(Eu=uu.message)&&void 0!==Eu?Eu:""),600)}`)
          }))
        }(uu), uu)), (uu => {
          throw Iu(`WebGPU requestDevice failed: ${String(uu)}`), uu
        }))
      }));
      const uu = tE("GPUDevice");
      bE(uu, "createShaderModule", (uu => function() {
        for (var Eu, ju, su = arguments.length, Uu = new Array(su), Zu = 0; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
        const Xu = CE(uu, this, Uu);
        return function(uu, Eu) {
          const ju = Eu.includes("decodeQuad");
          ju && QE.add(uu);
          const su = uu.getCompilationInfo;
          null === su || void 0 === su || su.call(uu).then((uu => {
            if (0 === uu.messages.length && !ju) return;
            const Eu = {};
            for (const ju of uu.messages) {
              var su;
              Eu[String(ju.type)] = (null !== (su = Eu[String(ju.type)]) && void 0 !== su ? su : 0) + 1
            }
            const Uu = uu.messages.map((uu => `${String(uu.type)} ${String(uu.lineNum)}:${String(uu.linePos)} ${String(uu.message)}`)).join("\n");
            SE.compile < qE && (SE.compile++, Iu(`WebGPU ${ju?"terrain ":""}shader module compiled: ${JSON.stringify(Eu)}${Uu?` first: ${Bu(Uu.split("\n")[0],300)}`:""}`)), Uu && Fu(`WebGPU shader module messages:\n${Bu(Uu)}`)
          }))
        }(Xu, String(null !== (Eu = (null !== (ju = Uu[0]) && void 0 !== ju ? ju : {}).code) && void 0 !== Eu ? Eu : "")), Xu
      })), bE(uu, "createRenderPipeline", (uu => function() {
        for (var Eu, ju = arguments.length, su = new Array(ju), Uu = 0; Uu < ju; Uu++) su[Uu] = arguments[Uu];
        const Zu = CE(uu, this, su);
        return HE(Zu, null !== (Eu = su[0]) && void 0 !== Eu ? Eu : {}), Zu
      })), bE(uu, "createRenderPipelineAsync", (uu => function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return CE(uu, this, ju).then((uu => {
          var Eu;
          return HE(uu, null !== (Eu = ju[0]) && void 0 !== Eu ? Eu : {}), uu
        }), (uu => {
          var Eu;
          throw function(uu, Eu) {
            var ju, su, Uu;
            if (SE.rejected >= qE) return;
            SE.rejected++;
            const {
              reason: Zu,
              message: Xu
            } = null !== Eu && void 0 !== Eu ? Eu : {}, lu = String(null !== (ju = (null !== (su = uu.vertex) && void 0 !== su ? su : {}).entryPoint) && void 0 !== ju ? ju : "");
            Iu(`WebGPU pipeline "${String(null!==(Uu=uu.label)&&void 0!==Uu?Uu:"")}" ${lu} rejected (${String(null!==Zu&&void 0!==Zu?Zu:"no reason")}): ${Bu(String(null!==Xu&&void 0!==Xu?Xu:Eu),600)}`)
          }(null !== (Eu = ju[0]) && void 0 !== Eu ? Eu : {}, uu), uu
        }))
      })), bE(tE("GPUCanvasContext"), "configure", (uu => function() {
        for (var Eu, ju = arguments.length, su = new Array(ju), Uu = 0; Uu < ju; Uu++) su[Uu] = arguments[Uu];
        const Zu = null !== (Eu = su[0]) && void 0 !== Eu ? Eu : {};
        var Xu, lu;
        IE++ < 3 && Iu(`WebGPU canvas ${String(Zu.format)} ${String(null!==(Xu=Zu.colorSpace)&&void 0!==Xu?Xu:"srgb")} alpha ${String(null!==(lu=Zu.alphaMode)&&void 0!==lu?lu:"opaque")}`);
        return CE(uu, this, su)
      })), AE(tE("GPURenderPassEncoder")), AE(tE("GPURenderBundleEncoder"))
    }
    const zE = 1e4,
      RE = 6e4,
      uj = 5e3,
      Ej = 3e3,
      jj = 100;
    let sj = null,
      Uj = !1,
      Zj = {
        ...vE.e
      },
      Xj = !1,
      lj = null,
      qj = 0,
      fj = () => {};
    const Cj = new Promise((uu => {
      fj = uu
    }));

    function bj() {
      var uu;
      Uj || (Uj = !0, Zj = Object.assign(window.bloxdRenderDebug ??= {
        ...vE.e
      }, {
        faceCull: "0" === (0, Zu.l)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (uu = (0, Zu.l)("adrenoProbe")) && void 0 !== uu ? uu : ""
      }), Iu("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), cE || "undefined" === typeof window || (cE = !0, "undefined" !== typeof WebGL2RenderingContext && JE(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && JE(WebGLRenderingContext.prototype, !1)), yE(), (0, Zu.c)("renderProbe", (() => {
        Dj("console")
      })), Yj(), setInterval(Mj, uj))
    }

    function cj(uu) {
      var Eu, ju;
      bj(), sj = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.backend) && void 0 !== Eu ? Eu : null;
      const su = `, renderer param ${null!==(ju=(0,Zu.l)("renderer"))&&void 0!==ju?ju:"none"}, faceCull ${"0"===Zj.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Zj.adrenoProbe||"none"}`;
      Iu(`${(0,KE.d)(uu)}${null===uu?"":su}`)
    }

    function Nj() {
      const uu = performance.now(),
        Eu = Oj(Cj, zE, RE).then((Eu => Dj(`${Math.round((performance.now()-uu)/1e3)} s after playable${Eu?"":", no terrain drawn yet"}`)));
      (0, Uu.c)(Iu, (async () => {
        await Eu, await lj
      }))
    }
    async function Oj(uu, Eu, ju) {
      const Uu = (0, su.b)(ju).then((() => !1));
      return await (0, su.b)(Eu), Promise.race([uu.then((() => !0)), Uu])
    }

    function Yj() {
      requestAnimationFrame((() => {
        qj++, Yj()
      }))
    }

    function hj() {
      var uu, Eu, ju;
      if (Xj) return;
      (Xj = !0, Iu(`renderer caps ${null!==(uu=Zj.caps)&&void 0!==uu?uu:"(not noted)"}; terrain fetch ${null!==(Eu=Zj.fetch)&&void 0!==Eu?Eu:"(not noted)"}`), Zj.adrenoProbe) && Iu(`adrenoProbe ${Zj.adrenoProbe} asked; in force (storage fetch only): ${null!==(ju=Zj.probe)&&void 0!==ju?ju:"(not noted)"}`);
      const su = Ku.context;
      if (su) {
        for (const uu of function(uu) {
            var Eu;
            const ju = [],
              su = uu.getExtension("WEBGL_debug_renderer_info"),
              Uu = su ? uu.getParameter(su.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Zu = su ? uu.getParameter(su.UNMASKED_RENDERER_WEBGL) : "(masked)";
            ju.push(`GL ${String(uu.getParameter(uu.VERSION))} | ${String(uu.getParameter(uu.SHADING_LANGUAGE_VERSION))} | ${String(uu.getParameter(uu.VENDOR))} / ${String(uu.getParameter(uu.RENDERER))}`), ju.push(`GL unmasked ${Uu} / ${Zu}`);
            const Xu = [
              ["MAX_TEXTURE_SIZE", uu.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", uu.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", uu.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", uu.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", uu.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", uu.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", uu.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in uu && Xu.push(["MAX_UNIFORM_BLOCK_SIZE", uu.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", uu.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", uu.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", uu.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), ju.push(`GL limits ${Xu.map((Eu=>{let[ju,su]=Eu;return`${ju} ${String(uu.getParameter(su))}`})).join(", ")}`);
            const lu = (Eu, ju) => {
              const su = uu.getShaderPrecisionFormat(Eu, uu.HIGH_FLOAT),
                Uu = uu.getShaderPrecisionFormat(Eu, uu.HIGH_INT);
              return `${ju} highp float ${su?`${su.rangeMin}/${su.rangeMax}/${su.precision}`:"?"} int ${Uu?`${Uu.rangeMin}/${Uu.rangeMax}/${Uu.precision}`:"?"}`
            };
            ju.push(`GL precision ${lu(uu.VERTEX_SHADER,"VS")}, ${lu(uu.FRAGMENT_SHADER,"FS")}`);
            const qu = uu.getContextAttributes();
            return ju.push(`GL context ${JSON.stringify(qu)} drawingBuffer ${uu.drawingBufferWidth}x${uu.drawingBufferHeight}${"drawingBufferFormat"in uu?` format 0x${Number(uu.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in uu?` ${String(uu.drawingBufferColorSpace)}`:""}`), ju.push(`GL extensions ${(null!==(Eu=uu.getSupportedExtensions())&&void 0!==Eu?Eu:[]).join(" ")}`), ju
          }(su)) Iu(uu);
        ! function() {
          if (!Ku.context) return;
          let uu = 0,
            Eu = 0;
          for (const [ju, su] of ku) !su.gl.isContextLost() && su.gl.isProgram(ju) && (Eu++, PE(su.gl, ju, su), null !== su.terrain && uu++);
          Iu(`programs: ${Eu} live of ${ku.length} linked, ${uu} packed terrain; CPU page copies ${Math.round(Ku.shadowBytes/1048576)} MiB (${Ku.uncopied} over budget)`)
        }()
      }
    }

    function Dj(uu) {
      return lj ??= async function(uu) {
        hj(), "webgpu" === sj ? (gj(), "1" === Zj.slotCheck && Iu("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Zj.slotCheck = "1", await
          function(uu) {
            if (null !== BE) return Promise.resolve();
            const Eu = [];
            return BE = Eu, new Promise((ju => {
              setTimeout((() => {
                BE = null, Iu(`WebGPU draw ranges (${uu}): ${Eu.length} terrain draws recorded in a second (first ${fE}; bundles replay without new ones)`);
                for (const uu of Eu) Iu(uu);
                ju()
              }), 1e3)
            }))
          }(uu), await async function() {
            if (await (0, vE.i)(Zj, "slotCheck", ["1"], Ej, jj), "1" === Zj.slotCheck) return void Iu(`slot check: no answer in ${Ej} ms (only the storage fetch has one; a later answer logs on its own)`);
            gj()
          }()) : await XE(uu);
        Iu(`check (${uu}) done: bloxdDebug.save() downloads it all`)
      }(uu).catch((Eu => {
        Iu(`check (${uu}) failed: ${String(Eu)}`)
      })).finally((() => {
        lj = null
      })), lj
    }

    function gj() {
      void 0 !== Zj.slotCheck && "1" !== Zj.slotCheck && (Iu(Zj.slotCheck), delete Zj.slotCheck)
    }

    function Mj() {
      const uu = uu => qj ? (uu / qj).toFixed(1) : "0",
        Eu = function() {
          const uu = LE;
          return LE = {
            draws: 0,
            faces: 0
          }, uu
        }(),
        ju = function() {
          const uu = DE;
          return DE = {
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
        su = function() {
          const uu = gE;
          return gE = {
            buffer: 0,
            texture: 0
          }, uu
        }();
      gj(), ("webgpu" === sj ? Eu.draws : ju.inst.draws + ju.tex.draws) > 0 && fj();
      const Uu = "webgpu" === sj ? [`terrain ${uu(Eu.draws)} draws ${uu(Eu.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((uu => ju[uu].draws > 0)).map((Eu => `${Eu} ${uu(ju[Eu].draws)} draws ${uu(ju[Eu].faces)} faces a frame`));
      Iu(`${qj} frames: ${Uu.join(", ")||"no draws"}; uploaded ${Math.round(su.buffer/1024)} KiB to buffers, ${Math.round(su.texture/1024)} KiB to data textures`), qj = 0
    }
  },
  4881: (uu, Eu, ju) => {
    function su(uu) {
      if (null === uu) return "backend: none picked (no renderer build)";
      const Eu = uu.adapter ? `${uu.adapter.vendor}/${uu.adapter.architecture}` : "none";
      return `backend ${uu.backend}: reason ${uu.reason}, source ${uu.source}, adapter ${Eu}`
    }
    ju.d(Eu, {
      d: () => su
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
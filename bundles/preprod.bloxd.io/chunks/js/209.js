export const id = 209;
export const ids = [209];
export const modules = {
  41741: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      loadGlbAsset: () => ei,
      loadGlbTree: () => di
    });
    var Op = cp(38124),
      op = cp(41745),
      Ip = cp(36455),
      Sp = cp.n(Ip);

    function xp() {
      return Sp()('(()=>{class pp extends Error{}function ip(ip,cp){const Op=ip._malloc(cp);if(0===Op)throw new pp(`Draco: the decoder\'s heap refused ${cp} bytes`);return Op}function cp(pp){return{[pp.DT_FLOAT32]:[Float32Array,5126],[pp.DT_INT8]:[Int8Array,5120],[pp.DT_INT16]:[Int16Array,5122],[pp.DT_INT32]:[Int32Array,5124],[pp.DT_UINT8]:[Uint8Array,5121],[pp.DT_UINT16]:[Uint16Array,5123],[pp.DT_UINT32]:[Uint32Array,5125]}}function Op(ip,Op,op,Ip,Sp){let xp=null,Lp=null,Yp=null;try{xp=new ip.Decoder,Lp=new ip.DecoderBuffer,Lp.Init(Op,Op.byteLength);let Dp=0;const Ap=xp.GetEncodedGeometryType(Lp);if(Ap===ip.TRIANGULAR_MESH){const cp=new ip.Mesh;Yp=cp;const Op=xp.DecodeBufferToMesh(Lp,cp);if(!Op.ok()||0===cp.ptr)throw new pp(Op.error_msg());Dp=3*cp.num_faces()}else{if(Ap!==ip.POINT_CLOUD)throw new pp(`Draco: Cannot decode invalid geometry type ${Ap}`);{const cp=new ip.PointCloud;Yp=cp;const Op=xp.DecodeBufferToPointCloud(Lp,cp);if(!Op.ok()||!cp.ptr)throw new pp(Op.error_msg())}}const Pp=Yp.num_points();if(Pp!==Ip.vertices||Dp!==Ip.indices)throw new pp(`Draco: decoded ${Pp} vertices and ${Dp} indices, the accessors declare ${Ip.vertices} and ${Ip.indices}`);const Wp=cp(ip),yp=[];for(const{kind:ip,id:cp,components:Op}of op){const op=xp.GetAttributeByUniqueId(Yp,cp);if(!op||0===op.ptr)throw new pp(`Draco: no attribute with id ${cp} (${ip})`);const Ip=op.data_type();if(!Wp[Ip])throw new pp(`Draco: Cannot decode invalid data type ${Ip}`);if(op.num_components()!==Op)throw new pp(`Draco: ${ip} decodes to ${op.num_components()} components, its accessor declares ${Op}`);yp.push([ip,op,Ip])}return Sp({dracoDecoder:xp,geometry:Yp,triangles:Ap===ip.TRIANGULAR_MESH,numPoints:Pp,numIndices:Dp,attributes:yp})}finally{Yp&&ip.destroy(Yp),Lp&&ip.destroy(Lp),xp&&ip.destroy(xp)}}const op=self;let Ip=null;self.onmessage=pp=>{let{data:Sp}=pp;if("init"===Sp.id){try{importScripts(Sp.url),Ip=DracoDecoderModule({wasmBinary:Sp.wasmBinary}),op.postMessage({id:"initDone"})}catch(Ap){op.postMessage({id:"initError",message:Ap instanceof Error?Ap.message:String(Ap)})}return}const{seq:xp,data:Lp,attributeIds:Yp,expected:Dp}=Sp;Ip?Ip.then((pp=>{try{const Ip=function(pp,op,Ip,Sp){const xp=Object.keys(Ip).map((pp=>({kind:pp,id:Ip[pp],components:Sp.components[pp]})));return Op(pp,op,xp,Sp,(Op=>{let{dracoDecoder:op,geometry:Ip,triangles:Sp,numPoints:xp,numIndices:Lp,attributes:Yp}=Op;const Dp=cp(pp);let Ap=null;if(Sp){const cp=4*Lp,Op=ip(pp,cp);try{op.GetTrianglesUInt32Array(Ip,cp,Op),Ap=new Uint32Array(Lp),Ap.set(new Uint32Array(pp.HEAPF32.buffer,Op,Lp))}finally{pp._free(Op)}}const Pp=[];for(const[cp,Wp,yp]of Yp){const[Op]=Dp[yp],Sp=Wp.num_components(),Lp=xp*Sp,Yp=Lp*Op.BYTES_PER_ELEMENT,Ap=ip(pp,Yp);try{op.GetAttributeDataArrayForAllPoints(Ip,Wp,yp,Yp,Ap),Pp.push({kind:cp,data:new Op(pp.HEAPF32.buffer,Ap,Lp).slice(),size:Sp,byteOffset:Wp.byte_offset(),byteStride:Wp.byte_stride(),normalized:Wp.normalized()})}finally{pp._free(Ap)}}return{indices:Ap,attributes:Pp,totalVertices:xp}}))}(pp,Lp,Yp,Dp),Sp=Ip.attributes.map((pp=>pp.data.buffer));Ip.indices&&Sp.push(Ip.indices.buffer),op.postMessage({id:"decoded",seq:xp,...Ip},Sp)}catch(Ap){op.postMessage({id:"decodeError",seq:xp,message:Ap instanceof Error?Ap.message:String(Ap)})}}),(pp=>{op.postMessage({id:"decodeError",seq:xp,message:pp instanceof Error?pp.message:String(pp)})})):op.postMessage({id:"decodeError",seq:xp,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, cp.p + "dracoDecode.worker.d63533f4.worker.js")
    }
    var Lp = cp(104);
    const Yp = 1e3;
    let Dp = null,
      Ap = null;
    const Pp = [],
      Wp = [];
    let yp = 0;
    const Up = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      wp = function(pp, ip) {
        const cp = pp ? Math.max(1, Math.min(Math.floor(.5 * pp), 4)) : 1;
        return ip ? Math.min(cp, 2) : cp
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Lp.isMobile)());

    function vp() {
      if (!Dp) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: pp,
        wasmBinaryUrl: ip
      } = Dp;
      return Ap ??= fetch(ip).then((pp => {
        if (!pp.ok) throw new Error(`Draco: fetching ${ip} failed: ${pp.status}`);
        return pp.arrayBuffer()
      })), Ap.catch((() => {
        Ap = null
      })), Up.workersStarted++, Ap.then((ip => new Promise(((cp, Op) => {
        const op = new xp;
        op.onerror = pp => {
          op.onmessage = null, op.onerror = null, op.terminate(), Op(new Error("Draco: the decode worker failed to start" + (pp.message ? `: ${pp.message}` : " (its script did not load)")))
        }, op.onmessage = pp => {
          let {
            data: ip
          } = pp;
          op.onmessage = null, op.onerror = null, "initDone" === ip.id ? cp(op) : (op.terminate(), Op(new Error(`Draco: ${"initError"===ip.id?ip.message:"the worker did not start"}`)))
        };
        const Ip = ip.slice(0),
          Sp = {
            id: "init",
            url: pp,
            wasmBinary: Ip
          };
        op.postMessage(Sp, [Ip])
      }))))
    }

    function tp(pp) {
      const ip = Pp.indexOf(pp); - 1 !== ip && Pp.splice(ip, 1);
      const cp = Wp.shift();
      cp && dp(cp)
    }

    function Hp(pp, ip) {
      pp.busy = !0, pp.releaseTimer && (clearTimeout(pp.releaseTimer), pp.releaseTimer = null);
      pp.worker.then((cp => {
        const Op = yp++;
        cp.onmessage = op => {
          let {
            data: Ip
          } = op;
          if (("decoded" === Ip.id || "decodeError" === Ip.id) && Ip.seq === Op) {
            if (cp.onmessage = null, cp.onerror = null, "decoded" === Ip.id) return Up.decodes++, ip.resolve({
              indices: Ip.indices,
              attributes: Ip.attributes,
              totalVertices: Ip.totalVertices
            }), void(() => {
              const ip = Wp.shift();
              ip ? Hp(pp, ip) : (pp.busy = !1, pp.releaseTimer = setTimeout((() => {
                const ip = Pp.indexOf(pp); - 1 !== ip && Pp.splice(ip, 1), pp.worker.then((pp => {
                  pp.terminate()
                }))
              }), Yp))
            })();
            cp.terminate(), ip.reject(new Error(Ip.message)), tp(pp)
          }
        }, cp.onerror = Op => {
          cp.onmessage = null, cp.onerror = null, cp.terminate(), ip.reject(new Error(`Draco: the decode worker failed: ${Op.message}`)), tp(pp)
        };
        const op = {
          id: "decode",
          seq: Op,
          data: ip.data,
          attributeIds: ip.attributeIds,
          expected: ip.expected
        };
        cp.postMessage(op, [ip.data.buffer])
      }), (cp => {
        ip.reject(cp instanceof Error ? cp : new Error(String(cp))), tp(pp)
      }))
    }

    function dp(pp) {
      const ip = Pp.find((pp => !pp.busy));
      if (ip) Hp(ip, pp);
      else {
        if (Pp.length < wp) {
          const ip = {
            worker: vp(),
            busy: !0,
            releaseTimer: null
          };
          return Pp.push(ip), Up.mostWorkers = Math.max(Up.mostWorkers, Pp.length), void Hp(ip, pp)
        }
        Wp.push(pp)
      }
    }

    function ep(pp, ip, cp) {
      return new Promise(((Op, op) => {
        dp({
          data: new Int8Array(pp.buffer, pp.byteOffset, pp.byteLength).slice(),
          attributeIds: ip,
          expected: cp,
          resolve: Op,
          reject: op
        })
      }))
    }
    var jp = cp(37693),
      kp = cp(37698),
      mp = cp(34496),
      Rp = cp(34493);
    const qp = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Mp(pp) {
      const ip = (0, Rp.f)(pp.byteLength);
      if (ip) throw new mp.o(ip);
      const {
        json: cp,
        bin: Op
      } = (0, mp.B)(pp), op = (0, Rp.e)(cp, Op);
      if (op) throw new mp.o(op);
      try {
        return function(pp, ip) {
          var cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp;
          const vp = new Map,
            tp = cp => {
              let Op = vp.get(cp);
              if (!Op) {
                var op;
                const Ip = pp.bufferViews[cp],
                  Sp = null !== (op = Ip.byteOffset) && void 0 !== op ? op : 0;
                Op = {
                  index: cp,
                  bytes: ip.subarray(Sp, Sp + Ip.byteLength),
                  byteStride: Ip.byteStride
                }, vp.set(cp, Op)
              }
              return Op
            },
            Hp = new Map,
            dp = ip => {
              let cp = Hp.get(ip);
              if (!cp) {
                var Op;
                const op = pp.accessors[ip];
                cp = {
                  index: ip,
                  count: op.count,
                  type: op.type,
                  numComponents: mp.r[op.type],
                  componentType: op.componentType,
                  normalized: null !== (Op = op.normalized) && void 0 !== Op && Op,
                  byteOffset: op.byteOffset,
                  bufferView: void 0 === op.bufferView ? null : tp(op.bufferView),
                  min: op.min,
                  max: op.max
                }, Hp.set(ip, cp)
              }
              return cp
            },
            ep = null !== (cp = null === (Op = pp.extensionsUsed) || void 0 === Op ? void 0 : Op.includes("KHR_draco_mesh_compression")) && void 0 !== cp && cp,
            jp = (null !== (op = pp.meshes) && void 0 !== op ? op : []).map(((ip, cp) => {
              const Op = ip.primitives.map(((ip, cp) => {
                var Op, op, Ip;
                const Sp = ep ? null === (Op = ip.extensions) || void 0 === Op ? void 0 : Op.KHR_draco_mesh_compression : void 0;
                let xp = null;
                const Lp = [];
                if (Sp) {
                  const cp = {
                    vertices: pp.accessors[ip.attributes.POSITION].count,
                    indices: void 0 === ip.indices ? 0 : pp.accessors[ip.indices].count,
                    components: {}
                  };
                  xp = {
                    bufferView: tp(Sp.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: cp
                  };
                  for (const [Op, op] of mp.h) {
                    const Ip = Sp.attributes[Op];
                    if (void 0 === Ip) continue;
                    xp.attributeIds[op] = Ip;
                    const Lp = ip.attributes[Op];
                    var Yp;
                    if (void 0 !== Lp) xp.normalized[op] = null !== (Yp = pp.accessors[Lp].normalized) && void 0 !== Yp && Yp, cp.components[op] = mp.r[pp.accessors[Lp].type]
                  }
                } else
                  for (const [pp, Dp] of mp.h) {
                    const cp = ip.attributes[pp];
                    void 0 !== cp && Lp.push({
                      semantic: pp,
                      kind: Dp,
                      accessor: dp(cp)
                    })
                  }
                return {
                  index: cp,
                  mode: null !== (op = ip.mode) && void 0 !== op ? op : 4,
                  attributes: Lp,
                  indices: Sp || void 0 === ip.indices ? null : dp(ip.indices),
                  position: void 0 === ip.attributes.POSITION ? null : dp(ip.attributes.POSITION),
                  material: null !== (Ip = ip.material) && void 0 !== Ip ? Ip : null,
                  draco: xp
                }
              }));
              return {
                index: cp,
                name: ip.name,
                primitives: Op,
                extras: ip.extras
              }
            })),
            kp = (null !== (Ip = pp.nodes) && void 0 !== Ip ? Ip : []).map(((pp, ip) => {
              var cp, Op;
              return {
                index: ip,
                name: pp.name,
                children: null !== (cp = pp.children) && void 0 !== cp ? cp : [],
                mesh: null !== (Op = pp.mesh) && void 0 !== Op ? Op : null,
                translation: pp.translation,
                rotation: pp.rotation,
                scale: pp.scale,
                hasCamera: void 0 !== pp.camera,
                extras: pp.extras
              }
            })),
            Rp = null !== (Sp = null === (xp = pp.extensionsUsed) || void 0 === xp ? void 0 : xp.includes("KHR_materials_unlit")) && void 0 !== Sp && Sp,
            Mp = null !== (Lp = null === (Yp = pp.extensionsUsed) || void 0 === Yp ? void 0 : Yp.includes("KHR_texture_transform")) && void 0 !== Lp && Lp,
            Cp = (null !== (Dp = pp.materials) && void 0 !== Dp ? Dp : []).map(((pp, ip) => {
              var cp, Op, op, Ip;
              const Sp = pp.pbrMetallicRoughness,
                xp = null === Sp || void 0 === Sp ? void 0 : Sp.baseColorTexture;
              return {
                index: ip,
                name: pp.name,
                extras: pp.extras,
                unlit: Rp && void 0 !== (null === (cp = pp.extensions) || void 0 === cp ? void 0 : cp.KHR_materials_unlit),
                pbr: Sp ? {
                  baseColorFactor: Sp.baseColorFactor,
                  metallicFactor: Sp.metallicFactor,
                  roughnessFactor: Sp.roughnessFactor
                } : null,
                baseColorTexture: xp ? {
                  texture: xp.index,
                  transform: Mp && (null === (Op = xp.extensions) || void 0 === Op ? void 0 : Op.KHR_texture_transform) || null
                } : null,
                emissiveFactor: pp.emissiveFactor,
                alphaMode: null !== (op = pp.alphaMode) && void 0 !== op ? op : "OPAQUE",
                alphaCutoff: pp.alphaCutoff,
                doubleSided: null !== (Ip = pp.doubleSided) && void 0 !== Ip && Ip
              }
            })),
            Ep = (null !== (Ap = pp.textures) && void 0 !== Ap ? Ap : []).map(((ip, cp) => {
              var Op, op;
              const Ip = void 0 === ip.sampler ? qp : {
                index: ip.sampler,
                ...null === (Op = pp.samplers) || void 0 === Op ? void 0 : Op[ip.sampler]
              };
              return {
                index: cp,
                sampler: {
                  index: Ip.index,
                  magFilter: Ip.magFilter,
                  minFilter: Ip.minFilter,
                  wrapS: Ip.wrapS,
                  wrapT: Ip.wrapT
                },
                image: null !== (op = ip.source) && void 0 !== op ? op : -1
              }
            })),
            Xp = (null !== (Pp = pp.images) && void 0 !== Pp ? Pp : []).map(((pp, ip) => ({
              index: ip,
              name: pp.name,
              mimeType: pp.mimeType,
              bufferView: tp(pp.bufferView)
            }))),
            lp = null !== (Wp = (0, mp.y)(pp)) && void 0 !== Wp ? Wp : 0;
          return {
            json: pp,
            rootNodes: null !== (yp = null === (Up = pp.scenes) || void 0 === Up || null === (wp = Up[lp]) || void 0 === wp ? void 0 : wp.nodes) && void 0 !== yp ? yp : [],
            nodes: kp,
            meshes: jp,
            materials: Cp,
            textures: Ep,
            images: Xp
          }
        }(cp, Op)
      } catch (Ip) {
        throw Ip instanceof mp.k ? Ip : new mp.k(`reading the GLB failed: ${Ip instanceof Error?Ip.message:String(Ip)}`)
      }
    }
    async function Cp(pp, ip) {
      var cp, Op;
      const op = pp.draco;
      if (!op) throw new mp.k("not a Draco primitive");
      let Ip;
      try {
        Ip = await ip(op.bufferView.bytes, op.attributeIds, op.expected)
      } catch (Yp) {
        throw new mp.k(`Draco decoding failed: ${Yp instanceof Error?Yp.message:String(Yp)}`)
      }
      const {
        vertices: Sp,
        indices: xp,
        components: Lp
      } = op.expected;
      if (Ip.totalVertices !== Sp || (null !== (cp = null === (Op = Ip.indices) || void 0 === Op ? void 0 : Op.length) && void 0 !== cp ? cp : 0) !== xp || Ip.attributes.some((pp => pp.size !== Lp[pp.kind] || pp.data.length !== Sp * pp.size))) throw new mp.k("Draco decoding gave other counts than the accessors declare");
      for (const Dp of Ip.attributes) {
        const pp = op.normalized[Dp.kind];
        void 0 !== pp && (Dp.normalized = pp)
      }
      return Ip
    }
    const Ep = new WeakMap;

    function Xp(pp, ip) {
      var cp;
      const Op = null !== (cp = Ep.get(pp)) && void 0 !== cp ? cp : ip(pp);
      return Ep.set(pp, Op), Op
    }

    function lp(pp) {
      const ip = pp.bufferView,
        cp = 5125 === pp.componentType ? Uint32Array : Uint16Array,
        Op = ip.bytes.buffer,
        op = ip.bytes.byteOffset + (pp.byteOffset || 0);
      return op % cp.BYTES_PER_ELEMENT !== 0 ? new cp(Op.slice(op, op + pp.count * cp.BYTES_PER_ELEMENT), 0) : new cp(Op, op, pp.count)
    }

    function Qp(pp, ip) {
      if (pp.min && pp.max) return [new Float64Array(pp.min), new Float64Array(pp.max)];
      const cp = ip.find((pp => {
          let {
            kind: ip
          } = pp;
          return "position" === ip
        })),
        Op = cp ? (0, kp.g)(cp, pp.count) : new Float32Array(0);
      return (0, kp.r)(Op.length / 3, ((pp, ip) => Op[3 * pp + ip]))
    }

    function Jp(pp) {
      const ip = pp.attributes.map((pp => {
          var ip, cp;
          let {
            kind: Op,
            accessor: op
          } = pp;
          const {
            bufferView: Ip,
            numComponents: Sp
          } = op;
          if (!Ip) {
            return {
              kind: Op,
              data: Xp(op, (() => new Float32Array(Sp * op.count))),
              offset: 0,
              stride: 4 * Sp,
              components: Sp,
              glType: 5126,
              isNormalized: !1
            }
          }
          const xp = null !== (ip = Ip.byteStride) && void 0 !== ip ? ip : Sp * mp.c[op.componentType];
          return {
            kind: Op,
            data: Ip.bytes,
            offset: null !== (cp = op.byteOffset) && void 0 !== cp ? cp : 0,
            stride: xp,
            components: Sp,
            glType: op.componentType,
            isNormalized: op.normalized
          }
        })),
        cp = pp.indices,
        Op = cp && Xp(cp, lp),
        op = pp.position;
      return new kp.f(ip, Op, op.count, ...Qp(op, ip))
    }
    const Bp = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Np(pp, ip) {
      const cp = ip.attributes.map((pp => {
        let {
          kind: ip,
          data: cp,
          size: Op,
          byteOffset: op,
          byteStride: Ip,
          normalized: Sp
        } = pp;
        return {
          kind: ip,
          data: cp,
          offset: op,
          stride: Ip,
          components: Op,
          glType: 5120 + Bp.indexOf(cp.constructor),
          isNormalized: Sp
        }
      }));
      return new kp.f(cp, ip.indices, ip.totalVertices, ...Qp(pp.position, cp))
    }

    function Tp(pp) {
      const ip = pp.lastIndexOf("/");
      return ip < 0 ? pp : pp.substring(ip + 1)
    }

    function fp(pp) {
      const ip = pp.lastIndexOf("/");
      return ip < 0 ? "" : pp.substring(0, ip + 1)
    }

    function bp(pp) {
      return pp.name || `node${pp.index}`
    }
    const hp = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      ap = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      np = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Fp(pp) {
      var ip, cp, Op, op;
      const Ip = null !== (ip = pp.minFilter) && void 0 !== ip ? ip : 9987;
      return 9729 === (null !== (cp = pp.magFilter) && void 0 !== cp ? cp : 9729) ? null !== (Op = ap[Ip]) && void 0 !== Op ? Op : 3 : null !== (op = np[Ip]) && void 0 !== op ? op : 4
    }
    const gp = {
      33071: 0,
      33648: 2
    };

    function Gp(pp) {
      var ip;
      return null !== (ip = gp[null !== pp && void 0 !== pp ? pp : 10497]) && void 0 !== ip ? ip : 1
    }

    function rp(pp) {
      return 9728 === pp.minFilter || 9729 === pp.minFilter
    }

    function Zp(pp) {
      var ip, cp, Op;
      const op = Float64Array.from(null !== (ip = pp.scale) && void 0 !== ip ? ip : [1, 1, 1]);
      return pp.hasCamera && (op[0] = -1), {
        translation: Float64Array.from(null !== (cp = pp.translation) && void 0 !== cp ? cp : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Op = pp.rotation) && void 0 !== Op ? Op : [0, 0, 0, 1]),
        scale: op
      }
    }

    function zp(pp, ip) {
      let {
        translation: cp,
        rotation: Op,
        scale: op
      } = pp;
      const Ip = new Float32Array(16);
      return (0, jp.d)(op, 0, Op, 0, cp, 0, Ip), ip && (0, jp.m)(Ip, ip, 0, Ip), Ip
    }
    class sp {
      constructor(pp, ip, cp, Op) {
        this.model = pp, this.decode = ip, this.fileInfo = cp, this.uniqueRootUrl = Op, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const op = new Set,
          Ip = (ip, cp) => {
            const Op = pp.nodes[ip];
            if (this.parents.has(Op)) throw new mp.k(`/nodes/${ip}: Invalid recursive node hierarchy`);
            this.parents.set(Op, cp);
            const Sp = null === Op.mesh ? [] : pp.meshes[Op.mesh].primitives,
              xp = Sp.map((pp => {
                const ip = Sp.length > 1;
                return {
                  name: ip ? `${bp(Op)}_primitive${pp.index}` : bp(Op),
                  node: Op,
                  primitive: pp,
                  part: ip,
                  geometry: null
                }
              }));
            this.uses.set(Op, xp);
            const Lp = null !== Op.mesh && op.has(Op.mesh);
            op.add(Op.mesh), this.own.set(Op, Lp ? [] : xp);
            for (const pp of Op.children) Ip(pp, Op)
          };
        for (const Sp of pp.rootNodes) Ip(Sp, null);
        this.primitives = pp.nodes.flatMap((pp => {
          var ip;
          return null !== (ip = this.own.get(pp)) && void 0 !== ip ? ip : []
        }))
      }
      decodeGeometries() {
        const pp = new Map;
        return Promise.all(this.primitives.map((async ip => {
          const {
            primitive: cp
          } = ip, Op = cp.draco;
          let op = Op ? pp.get(Op.bufferView.index) : Promise.resolve(Jp(cp));
          op || (op = Cp(cp, this.decode).then((pp => Np(cp, pp))), pp.set(Op.bufferView.index, op)), ip.geometry = await op
        })))
      }
      parentOf(pp) {
        var ip;
        return null !== (ip = this.parents.get(pp)) && void 0 !== ip ? ip : null
      }
      meshesUnder(pp) {
        const ip = this.model.nodes.filter((pp => this.uses.has(pp)));
        for (const Op of ip) {
          const ip = this.uses.get(Op),
            cp = ip.find((ip => ip.name === pp));
          if (cp) return 1 === ip.length ? this.subtree(Op) : this.own.get(Op).includes(cp) ? [cp] : []
        }
        const cp = ip.find((ip => 1 !== this.uses.get(ip).length && bp(ip) === pp));
        return cp ? this.subtree(cp) : null
      }
      subtree(pp) {
        return [...this.own.get(pp), ...pp.children.flatMap((pp => this.subtree(this.model.nodes[pp])))]
      }
      worldMatrix(pp, ip, cp) {
        let Op = zp(Zp(ip ? hp : {}), null);
        const op = [];
        for (let Sp = pp.part ? pp.node : this.parentOf(pp.node); Sp; Sp = this.parentOf(Sp)) op.unshift(Sp);
        for (const Sp of op) Op = zp(Zp(Sp), Op);
        const Ip = Zp(pp.part ? {} : pp.node);
        return void 0 !== cp && Ip.scale.fill(cp), zp(Ip, Op)
      }
      floats(pp) {
        const {
          vertexAttributes: ip,
          vertexCount: cp
        } = pp.geometry;
        return new Map(ip.map((pp => [pp.kind, (0, kp.g)(pp, cp)])))
      }
      imageUrl(pp) {
        return function(pp, ip, cp) {
          let {
            name: Op
          } = ip;
          return `data:${pp}${Op}#image${cp}`
        }(this.uniqueRootUrl, this.fileInfo, pp)
      }
      textureDesc(pp, ip) {
        var cp;
        let {
          texture: Op,
          transform: op
        } = pp;
        const {
          sampler: Ip,
          image: Sp
        } = this.model.textures[Op], {
          bufferView: xp,
          mimeType: Lp,
          name: Yp
        } = this.model.images[Sp], Dp = op && {
          ...op.offset ? {
            uOffset: op.offset[0],
            vOffset: op.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...op.rotation ? {
            wAng: -op.rotation
          } : {},
          ...op.scale ? {
            uScale: op.scale[0],
            vScale: op.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Sp),
          noMipmap: rp(Ip),
          invertY: !1,
          samplingMode: Fp(Ip),
          data: {
            bytes: xp.bytes,
            mimeType: Lp,
            label: Yp,
            context: `/textures/${Op}`
          },
          sets: {
            wrapU: Gp(Ip.wrapS),
            wrapV: Gp(Ip.wrapT),
            ...Dp,
            coordinatesIndex: null !== (cp = null === op || void 0 === op ? void 0 : op.texCoord) && void 0 !== cp ? cp : 0,
            hasAlpha: ip
          }
        }
      }
    }
    async function Kp(pp, ip, cp, Op, op, Ip) {
      let Sp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const xp = function(pp, ip, cp) {
          return "string" !== typeof ip ? {
            url: "",
            rootUrl: pp,
            name: cp()
          } : ip ? ip.startsWith("data:") ? {
            url: ip,
            rootUrl: pp,
            name: ""
          } : pp ? {
            url: pp + ip,
            rootUrl: pp,
            name: ip
          } : {
            url: ip,
            rootUrl: fp(ip),
            name: Tp(ip)
          } : {
            url: pp,
            rootUrl: fp(pp),
            name: Tp(pp)
          }
        }(cp, pp, op),
        Lp = {};
      ip.addPendingData(Lp);
      try {
        const cp = Mp(await async function(pp, ip) {
            return "string" !== typeof ip ? ip : pp.url.startsWith("data:") ? (0, mp.s)(pp.url) : await (0, mp.w)(pp.url)
          }(xp, pp)),
          Lp = new sp(cp, Op, xp, function(pp, ip) {
            let {
              rootUrl: cp,
              name: Op
            } = pp;
            return !cp.startsWith("file:") && Op ? cp : `${cp}${ip()}/`
          }(xp, op));
        return await Ip(Lp), ip.importedMeshesFiles && (ip.loadingPluginName = "sE", Sp && ip.importedMeshesFiles.push(xp.url)), Lp
      } finally {
        ip.removePendingData(Lp)
      }
    }
    var Vp = cp(37800),
      ii = cp(37667),
      ci = cp(38106);

    function Oi(pp) {
      if (null === pp || void 0 === pp || !pp.min || !pp.max) return null;
      const [ip, cp, Op] = pp.min, [op, Ip, Sp] = pp.max, {
        BoundingInfo: xp,
        Zy: Lp
      } = (0, Vp.e)();
      return new xp(new Lp(ip, cp, Op), new Lp(op, Ip, Sp))
    }

    function oi(pp) {
      (0, ii.f)(pp) || (pp.geometry && pp.geometry.useBoundingInfoFromGeometry ? pp._updateBoundingInfo() : pp.refreshBoundingInfo(!0, !0))
    }
    class Ii {
      constructor(pp, ip) {
        this.pw = pp, this.decode = ip, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(pp) {
        let ip = this.viewData.get(pp.index);
        return ip || (ip = this.bufferData.then((() => pp.bytes)), this.viewData.set(pp.index, ip)), ip
      }
      viewBuffer(pp) {
        let ip = this.viewBuffers.get(pp.index);
        return ip || (ip = this.viewBytes(pp).then((pp => new((0, Vp.e)().my)(this.pw.gy(), pp, !1))), this.viewBuffers.set(pp.index, ip)), ip
      }
      vertexBuffer(pp, ip) {
        const {
          kind: cp,
          data: Op
        } = ip, op = `${pp.index}:${cp}`;
        let Ip = this.vertexBuffers.get(op);
        if (!Ip) {
          const Sp = pp.bufferView;
          Ip = Sp ? this.viewBuffer(Sp).then((pp => this.layoutVertexBuffer(pp, ip))) : Promise.resolve(Op).then((pp => new((0, Vp.e)().VertexBuffer)(this.pw.gy(), pp, cp, !1))), this.vertexBuffers.set(op, Ip)
        }
        return Ip
      }
      layoutVertexBuffer(pp, ip) {
        let {
          kind: cp,
          offset: Op,
          stride: op,
          components: Ip,
          glType: Sp,
          isNormalized: xp
        } = ip;
        const Lp = this.pw.gy();
        return new((0, Vp.e)().VertexBuffer)(Lp, pp, cp, !1, void 0, op, void 0, Op, Ip, Sp, xp, !0, void 0, !0)
      }
      load(pp, ip, cp) {
        const Op = (0, ii.f)(cp),
          op = pp => {
            Op || (cp._delayInfo = cp._delayInfo || [], -1 === cp._delayInfo.indexOf(pp) && cp._delayInfo.push(pp))
          },
          Ip = ip.draco;
        if (Ip) {
          for (const pp in Ip.attributeIds) op(pp);
          let Sp = this.dracoGeometry.get(Ip.bufferView.index);
          return Sp || (Sp = this.viewBytes(Ip.bufferView).then((async () => {
            let op;
            try {
              op = await Cp(ip, this.decode)
            } catch (Lp) {
              throw new mp.k(`${pp}: ${Lp instanceof Error?Lp.message:String(Lp)}`)
            }
            const Ip = Np(ip, op);
            if (Op) return Ip;
            const Sp = Oi(ip.position),
              xp = new((0, Vp.e)().MirroredGeometry)(cp.name, this.pw);
            Sp && (xp._boundingInfo = Sp, xp.useBoundingInfoFromGeometry = !0), Ip.indexData && xp.setIndices(Ip.indexData);
            for (const pp of Ip.vertexAttributes) xp.setVerticesBuffer(this.layoutVertexBuffer(pp.data, pp), Ip.vertexCount);
            return xp.link(Ip), xp
          })), this.dracoGeometry.set(Ip.bufferView.index, Sp)), Sp
        }
        const Sp = [],
          xp = Jp(ip);
        if (Op) return cp.isUnIndexed = !xp.indexData, cp.hasVertexAlpha = (0, ci.g)(ip), Promise.resolve(xp);
        const Lp = new((0, Vp.e)().MirroredGeometry)(cp.name, this.pw),
          {
            indexData: Yp
          } = xp;
        Yp ? Sp.push(this.viewBytes(ip.indices.bufferView).then((() => {
          Lp.setIndices(Yp)
        }))) : cp.isUnIndexed = !0;
        for (const [Dp, {
            kind: Ap,
            accessor: Pp
          }] of ip.attributes.entries()) op(Ap), Sp.push(this.vertexBuffer(Pp, xp.vertexAttributes[Dp]).then((pp => {
          if ("position" === pp.getKind()) {
            const pp = Oi(Pp);
            pp && (Lp._boundingInfo = pp, Lp.useBoundingInfoFromGeometry = !0)
          }
          Lp.setVerticesBuffer(pp, xp.vertexCount)
        })));
        return (0, ci.g)(ip) && (cp.hasVertexAlpha = !0), Promise.all(Sp).then((() => (Lp.link(xp), Lp)))
      }
    }
    var Si, xi = cp(37542),
      Li = cp(37313),
      Yi = cp(38118),
      Di = cp(37475),
      Ai = cp(37519),
      Pi = cp(2849),
      Wi = cp(37505);

    function yi(pp, ip) {
      pp.metadata = pp.metadata || {};
      const cp = pp._internalMetadata = pp._internalMetadata || {},
        Op = cp.sE = cp.sE || {};
      (Op.pointers = Op.pointers || []).push(ip)
    }

    function Ui(pp, ip) {
      if (ip && Object.keys(ip).length > 0) {
        const cp = pp.metadata = pp.metadata || {};
        (cp.sE = cp.sE || {}).extras = ip
      }
    }

    function wi(pp, ip) {
      ip.position = pp.translation ? Li.Zy.FromArray(pp.translation) : Li.Zy.Zero(), ip.rotationQuaternion = pp.rotation ? Li.Quaternion.FromArray(pp.rotation) : Li.Quaternion.Identity(), ip.ei = pp.scale ? Li.Zy.FromArray(pp.scale) : Li.Zy.One()
    }
    class vi {
      constructor(pp, ip) {
        if (this.pw = pp, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, ip) {
          const ip = pp.gy(),
            cp = pp.Kl.add((() => {
              this.dispose()
            })),
            Op = ip.Fy.add((() => {
              for (const pp of [...this.geometries, ...this.meshes, ...this.textures]) pp._rebuild()
            }));
          this.release = () => {
            pp.Kl.remove(cp), ip.Fy.remove(Op)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const pp of this.meshes) this.pw.TOp(pp);
          for (const pp of this.materials) this.pw.addMaterial(pp);
          for (const pp of this.geometries) this.pw.addGeometry(pp);
          for (const pp of this.transformNodes) this.pw.addTransformNode(pp);
          for (const pp of this.textures) this.pw.addTexture(pp)
        }
      }
      dispose() {
        var pp;
        for (const ip of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const pp of ip.slice()) pp.dispose();
          ip.length = 0
        }
        null === (pp = this.release) || void 0 === pp || pp.call(this), this.release = null
      }
    }
    class ti {
      constructor(pp, ip, cp, Op, op, Ip, Sp) {
        this.asset = pp, this.pw = ip, this.tree = cp, this.geometryData = op, this.materials = Ip, this.lite = Sp, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Op ? cp : null
      }
      create(pp) {
        if (this.lite) return pp();
        const ip = this.pw;
        ip._blockEntityCollection = !!this.container;
        try {
          const ip = pp();
          return this.container && (ip._parentContainer = this.container), ip
        } finally {
          ip._blockEntityCollection = !1
        }
      }
      node(pp, ip) {
        return this.create((() => this.lite ? ip ? (0, Yi.c)(this.lite, pp) : (0, Yi.p)(this.lite, pp) : ip ? new((0, Vp.e)().Mesh)(pp, this.pw) : new((0, Vp.e)().TransformNode)(pp, this.pw)))
      }
      async load() {
        var pp;
        this.asset.model.json.nodes && this.createRoot();
        const ip = this.lite ? null : this.pw,
          cp = null !== (pp = null === ip || void 0 === ip ? void 0 : ip.blockMaterialDirtyMechanism) && void 0 !== pp && pp;
        let Op;
        ip && (ip.blockMaterialDirtyMechanism = !0);
        try {
          Op = this.loadScene()
        } finally {
          null === ip || void 0 === ip || ip._forceBlockMaterialDirtyMechanism(cp)
        }
        await Op;
        const {
          root: op,
          tree: Ip
        } = this;
        op && (op.eC(!0), Ip.meshes.push(op), Ip.rootNodes.push(op));
        for (const xp of this.asset.model.nodes) {
          const pp = this.nodeObjects.get(xp.index);
          pp && ["TransformNode", "LiteNode"].includes(pp.getClassName()) && Ip.transformNodes.push(pp);
          for (const ip of null !== (Sp = this.nodePrimitives.get(xp.index)) && void 0 !== Sp ? Sp : []) {
            var Sp;
            Ip.meshes.push(ip);
            const pp = ip.geometry;
            pp && !Ip.geometries.includes(pp) && Ip.geometries.push(pp)
          }
        }
      }
      createRoot() {
        const pp = this.node("__root__", !0);
        this.root = pp, pp.eC(!1), this.pw.useRightHandedSystem || wi(hp, pp)
      }
      loadScene() {
        const pp = [];
        for (const ip of this.asset.model.rootNodes) pp.push(this.loadNode(this.asset.model.nodes[ip], (pp => {
          pp.parent = this.root
        })));
        return pp.push(Promise.resolve()), Promise.all(pp).then((() => {}))
      }
      loadNode(pp, ip) {
        const cp = `/nodes/${pp.index}`,
          Op = [],
          op = op => {
            if (yi(op, cp), wi(pp, op), pp.hasCamera && !this.pw.useRightHandedSystem) {
              const {
                ei: pp
              } = op;
              pp.set(-1, pp.y, pp.z)
            }
            for (const ip of pp.children) Op.push(this.loadNode(this.asset.model.nodes[ip], (pp => {
              pp.parent = op
            })));
            (cp => {
              Ui(cp, pp.extras), ip(cp)
            })(op)
          };
        if (null === pp.mesh) {
          const ip = this.node(bp(pp), !1);
          this.nodeObjects.set(pp.index, ip), op(ip)
        } else {
          const ip = this.asset.model.meshes[pp.mesh];
          Op.push(this.loadMesh(`/meshes/${ip.index}`, pp, ip, op))
        }
        return Promise.all(Op).then((() => {
          for (const cp of null !== (ip = this.nodePrimitives.get(pp.index)) && void 0 !== ip ? ip : []) {
            var ip;
            oi(cp)
          }
          return this.nodeObjects.get(pp.index)
        }))
      }
      loadMesh(pp, ip, cp, Op) {
        const op = [],
          Ip = bp(ip);
        if (1 === cp.primitives.length) {
          const Op = cp.primitives[0];
          op.push(this.loadPrimitive(`${pp}/primitives/${Op.index}`, Ip, Op, (pp => {
            this.nodeObjects.set(ip.index, pp), this.nodePrimitives.set(ip.index, [pp])
          })))
        } else {
          const Op = this.node(Ip, !1);
          this.nodeObjects.set(ip.index, Op);
          const Sp = [];
          this.nodePrimitives.set(ip.index, Sp);
          for (const ip of cp.primitives) op.push(this.loadPrimitive(`${pp}/primitives/${ip.index}`, `${Ip}_primitive${ip.index}`, ip, (pp => {
            pp.parent = Op, Sp.push(pp)
          })))
        }
        const Sp = this.nodeObjects.get(ip.index);
        return Op(Sp), Promise.all(op).then((() => Sp))
      }
      loadPrimitive(pp, ip, cp, Op) {
        const op = [],
          Ip = this.node(ip, !0);
        if (Ip.sideOrientation = this.pw.useRightHandedSystem ? Di.b.CounterClockWiseSideOrientation : Di.b.ClockWiseSideOrientation, op.push(this.geometryData.load(pp, cp, Ip).then((pp => {
            if ((0, ii.f)(Ip)) {
              var ip, cp;
              const Op = pp;
              Ip.replaceModel(Op, Int32Array.of(0, null !== (ip = null === (cp = Op.indexData) || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : Op.vertexCount, 0, Op.vertexCount))
            } else this.create((() => (pp.applyToMesh(Ip), pp)))
          }))), this.materials) {
          const pp = 0 === cp.mode ? Di.b.PointListDrawMode : Di.b.TriangleFillMode,
            ip = null === cp.material ? null : this.asset.model.materials[cp.material];
          op.push(this.loadMaterial(ip, pp, (pp => {
            Ip.material = pp
          })))
        }
        return yi(Ip, pp), Op(Ip), Promise.all(op).then((() => Ip))
      }
      loadMaterial(pp, ip, cp) {
        var Op;
        const op = `${null!==(Op=null===pp||void 0===pp?void 0:pp.index)&&void 0!==Op?Op:"default"}:${ip}`;
        let Ip = this.materialData.get(op);
        return Ip || (Ip = this.createMaterial(pp, ip), this.materialData.set(op, Ip)), cp(Ip.material), Ip.promise
      }
      createMaterial(pp, ip) {
        const cp = pp ? pp.name || `material${pp.index}` : "__GLTFLoader._default",
          {
            style: Op,
            unlit: op
          } = this.materials;
        let Ip;
        const Sp = this.create((() => {
          const Sp = (0, Wi.b)({
            name: cp,
            pw: this.pw,
            sets: {
              ...(0, ci.d)(this.asset, pp, Op, op),
              fillMode: ip
            },
            unrendered: !0
          });
          return Ip = Sp.model, Sp.mirror
        }));
        let xp = Promise.resolve();
        if (pp) {
          const ip = `/materials/${pp.index}`,
            Op = Ip.diffuseTexture;
          if (Op && !Op.mirror) xp = new Promise((pp => setTimeout(pp)));
          else if (Op) {
            const op = Op.mirror;
            op._parentContainer = this.container, op.name = `${cp} (Base Color)`, yi(op, `${ip}${pp.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(op), xp = (0, Ai.w)(Op)
          }
          Ui(Sp, pp.extras), yi(Sp, ip)
        }
        return this.tree.materials.push(Sp), {
          material: Sp,
          promise: xp
        }
      }
    }

    function Hi() {
      xi.e.dracoDecodes = Up.decodes, xi.e.dracoWorkersStarted = Up.workersStarted, xi.e.dracoMostWorkers = Up.mostWorkers
    }
    async function di(pp, ip, cp, op, Ip) {
      try {
        return await async function(pp, ip, cp, op, Ip, Sp) {
          var xp;
          let Lp;
          const Yp = null === (xp = (0, Pi.g)()) || void 0 === xp ? void 0 : xp.WU,
            Dp = null !== Yp && void 0 !== Yp && Yp.yU && ip === Yp.Gl() ? Yp : null,
            Ap = Ip && !Dp;
          return await Kp(pp, ip, cp, op, Op.e, (pp => (Lp = new vi(ip, Ap), new ti(pp, ip, Lp, Ap, new Ii(ip, op), Sp, Dp).load())), !Ip), Lp
        }(pp, ip, cp, ep, op, Ip)
      } finally {
        Hi()
      }
    }
    async function ei(pp, ip, cp, op) {
      try {
        return await Kp(pp, ip, cp, ep, Op.e, (pp => op(pp, new Ii(ip, ep))))
      } finally {
        Hi()
      }
    }
    Si = op.b, Dp || (Dp = {
      scriptUrl: new URL(Si.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Si.wasmBinaryUrl, location.href).href
    })
  },
  41745: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(131),
      op = cp(1087);

    function Ip(pp) {
      return (0, Op.isDiscordClient)() ? `https://${op.c.discordDomain}/${pp.href}` : pp.href
    }
    const Sp = {
      scriptUrl: Ip(new cp.U(cp(41749))),
      wasmBinaryUrl: Ip(new cp.U(cp(41755)))
    }
  },
  36455: pp => {
    pp.exports = function(pp, ip, cp, Op) {
      var op = self || window;
      try {
        try {
          var Ip;
          try {
            Ip = new op.Blob([pp])
          } catch (Yp) {
            (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
          }
          var Sp = op.URL || op.webkitURL,
            xp = Sp.createObjectURL(Ip),
            Lp = new op[ip](xp, cp);
          return Sp.revokeObjectURL(xp), Lp
        } catch (Yp) {
          return new op[ip]("data:application/javascript,".concat(encodeURIComponent(pp)), cp)
        }
      } catch (Yp) {
        if (!Op) throw Error("Inline worker is not supported");
        return new op[ip](Op, cp)
      }
    }
  },
  41755: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41749: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);
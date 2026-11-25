export const id = 209;
export const ids = [209];
export const modules = {
  41734: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      loadGlbAsset: () => be,
      loadGlbTree: () => Me
    });
    var Ot = Vt(38159),
      qt = Vt(41743),
      Dt = Vt(36471),
      mt = Vt.n(Dt);

    function dt() {
      return mt()('(()=>{class tt extends Error{}function et(et,Vt){const Ot=et._malloc(Vt);if(0===Ot)throw new tt(`Draco: the decoder\'s heap refused ${Vt} bytes`);return Ot}function Vt(tt){return{[tt.DT_FLOAT32]:[Float32Array,5126],[tt.DT_INT8]:[Int8Array,5120],[tt.DT_INT16]:[Int16Array,5122],[tt.DT_INT32]:[Int32Array,5124],[tt.DT_UINT8]:[Uint8Array,5121],[tt.DT_UINT16]:[Uint16Array,5123],[tt.DT_UINT32]:[Uint32Array,5125]}}function Ot(et,Ot,qt,Dt,mt){let dt=null,jt=null,Ht=null;try{dt=new et.Decoder,jt=new et.DecoderBuffer,jt.Init(Ot,Ot.byteLength);let Xt=0;const Qt=dt.GetEncodedGeometryType(jt);if(Qt===et.TRIANGULAR_MESH){const Vt=new et.Mesh;Ht=Vt;const Ot=dt.DecodeBufferToMesh(jt,Vt);if(!Ot.ok()||0===Vt.ptr)throw new tt(Ot.error_msg());Xt=3*Vt.num_faces()}else{if(Qt!==et.POINT_CLOUD)throw new tt(`Draco: Cannot decode invalid geometry type ${Qt}`);{const Vt=new et.PointCloud;Ht=Vt;const Ot=dt.DecodeBufferToPointCloud(jt,Vt);if(!Ot.ok()||!Vt.ptr)throw new tt(Ot.error_msg())}}const lt=Ht.num_points();if(lt!==Dt.vertices||Xt!==Dt.indices)throw new tt(`Draco: decoded ${lt} vertices and ${Xt} indices, the accessors declare ${Dt.vertices} and ${Dt.indices}`);const Et=Vt(et),ft=[];for(const{kind:et,id:Vt,components:Ot}of qt){const qt=dt.GetAttributeByUniqueId(Ht,Vt);if(!qt||0===qt.ptr)throw new tt(`Draco: no attribute with id ${Vt} (${et})`);const Dt=qt.data_type();if(!Et[Dt])throw new tt(`Draco: Cannot decode invalid data type ${Dt}`);if(qt.num_components()!==Ot)throw new tt(`Draco: ${et} decodes to ${qt.num_components()} components, its accessor declares ${Ot}`);ft.push([et,qt,Dt])}return mt({dracoDecoder:dt,geometry:Ht,triangles:Qt===et.TRIANGULAR_MESH,numPoints:lt,numIndices:Xt,attributes:ft})}finally{Ht&&et.destroy(Ht),jt&&et.destroy(jt),dt&&et.destroy(dt)}}const qt=self;let Dt=null;self.onmessage=tt=>{let{data:mt}=tt;if("init"===mt.id){try{importScripts(mt.url),Dt=DracoDecoderModule({wasmBinary:mt.wasmBinary}),qt.postMessage({id:"initDone"})}catch(Qt){qt.postMessage({id:"initError",message:Qt instanceof Error?Qt.message:String(Qt)})}return}const{seq:dt,data:jt,attributeIds:Ht,expected:Xt}=mt;Dt?Dt.then((tt=>{try{const Dt=function(tt,qt,Dt,mt){const dt=Object.keys(Dt).map((tt=>({kind:tt,id:Dt[tt],components:mt.components[tt]})));return Ot(tt,qt,dt,mt,(Ot=>{let{dracoDecoder:qt,geometry:Dt,triangles:mt,numPoints:dt,numIndices:jt,attributes:Ht}=Ot;const Xt=Vt(tt);let Qt=null;if(mt){const Vt=4*jt,Ot=et(tt,Vt);try{qt.GetTrianglesUInt32Array(Dt,Vt,Ot),Qt=new Uint32Array(jt),Qt.set(new Uint32Array(tt.HEAPF32.buffer,Ot,jt))}finally{tt._free(Ot)}}const lt=[];for(const[Vt,Et,ft]of Ht){const[Ot]=Xt[ft],mt=Et.num_components(),jt=dt*mt,Ht=jt*Ot.BYTES_PER_ELEMENT,Qt=et(tt,Ht);try{qt.GetAttributeDataArrayForAllPoints(Dt,Et,ft,Ht,Qt),lt.push({kind:Vt,data:new Ot(tt.HEAPF32.buffer,Qt,jt).slice(),size:mt,byteOffset:Et.byte_offset(),byteStride:Et.byte_stride(),normalized:Et.normalized()})}finally{tt._free(Qt)}}return{indices:Qt,attributes:lt,totalVertices:dt}}))}(tt,jt,Ht,Xt),mt=Dt.attributes.map((tt=>tt.data.buffer));Dt.indices&&mt.push(Dt.indices.buffer),qt.postMessage({id:"decoded",seq:dt,...Dt},mt)}catch(Qt){qt.postMessage({id:"decodeError",seq:dt,message:Qt instanceof Error?Qt.message:String(Qt)})}}),(tt=>{qt.postMessage({id:"decodeError",seq:dt,message:tt instanceof Error?tt.message:String(tt)})})):qt.postMessage({id:"decodeError",seq:dt,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, Vt.p + "dracoDecode.worker.d1a38d00.worker.js")
    }
    var jt = Vt(106);
    const Ht = 1e3;
    let Xt = null,
      Qt = null;
    const lt = [],
      Et = [];
    let ft = 0;
    const wt = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      yt = function(tt, et) {
        const Vt = tt ? Math.max(1, Math.min(Math.floor(.5 * tt), 4)) : 1;
        return et ? Math.min(Vt, 2) : Vt
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, jt.isMobile)());

    function Nt() {
      if (!Xt) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: tt,
        wasmBinaryUrl: et
      } = Xt;
      return Qt ??= fetch(et).then((tt => {
        if (!tt.ok) throw new Error(`Draco: fetching ${et} failed: ${tt.status}`);
        return tt.arrayBuffer()
      })), Qt.catch((() => {
        Qt = null
      })), wt.workersStarted++, Qt.then((et => new Promise(((Vt, Ot) => {
        const qt = new dt;
        qt.onerror = tt => {
          qt.onmessage = null, qt.onerror = null, qt.terminate(), Ot(new Error("Draco: the decode worker failed to start" + (tt.message ? `: ${tt.message}` : " (its script did not load)")))
        }, qt.onmessage = tt => {
          let {
            data: et
          } = tt;
          qt.onmessage = null, qt.onerror = null, "initDone" === et.id ? Vt(qt) : (qt.terminate(), Ot(new Error(`Draco: ${"initError"===et.id?et.message:"the worker did not start"}`)))
        };
        const Dt = et.slice(0),
          mt = {
            id: "init",
            url: tt,
            wasmBinary: Dt
          };
        qt.postMessage(mt, [Dt])
      }))))
    }

    function Mt(tt) {
      const et = lt.indexOf(tt); - 1 !== et && lt.splice(et, 1);
      const Vt = Et.shift();
      Vt && Jt(Vt)
    }

    function bt(tt, et) {
      tt.busy = !0, tt.releaseTimer && (clearTimeout(tt.releaseTimer), tt.releaseTimer = null);
      tt.worker.then((Vt => {
        const Ot = ft++;
        Vt.onmessage = qt => {
          let {
            data: Dt
          } = qt;
          if (("decoded" === Dt.id || "decodeError" === Dt.id) && Dt.seq === Ot) {
            if (Vt.onmessage = null, Vt.onerror = null, "decoded" === Dt.id) return wt.decodes++, et.resolve({
              indices: Dt.indices,
              attributes: Dt.attributes,
              totalVertices: Dt.totalVertices
            }), void(() => {
              const et = Et.shift();
              et ? bt(tt, et) : (tt.busy = !1, tt.releaseTimer = setTimeout((() => {
                const et = lt.indexOf(tt); - 1 !== et && lt.splice(et, 1), tt.worker.then((tt => {
                  tt.terminate()
                }))
              }), Ht))
            })();
            Vt.terminate(), et.reject(new Error(Dt.message)), Mt(tt)
          }
        }, Vt.onerror = Ot => {
          Vt.onmessage = null, Vt.onerror = null, Vt.terminate(), et.reject(new Error(`Draco: the decode worker failed: ${Ot.message}`)), Mt(tt)
        };
        const qt = {
          id: "decode",
          seq: Ot,
          data: et.data,
          attributeIds: et.attributeIds,
          expected: et.expected
        };
        Vt.postMessage(qt, [et.data.buffer])
      }), (Vt => {
        et.reject(Vt instanceof Error ? Vt : new Error(String(Vt))), Mt(tt)
      }))
    }

    function Jt(tt) {
      const et = lt.find((tt => !tt.busy));
      if (et) bt(et, tt);
      else {
        if (lt.length < yt) {
          const et = {
            worker: Nt(),
            busy: !0,
            releaseTimer: null
          };
          return lt.push(et), wt.mostWorkers = Math.max(wt.mostWorkers, lt.length), void bt(et, tt)
        }
        Et.push(tt)
      }
    }

    function Ct(tt, et, Vt) {
      return new Promise(((Ot, qt) => {
        Jt({
          data: new Int8Array(tt.buffer, tt.byteOffset, tt.byteLength).slice(),
          attributeIds: et,
          expected: Vt,
          resolve: Ot,
          reject: qt
        })
      }))
    }
    var ut = Vt(37716),
      Kt = Vt(37727),
      ht = Vt(34466),
      vt = Vt(34459);
    const Wt = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function St(tt) {
      const et = (0, vt.g)(tt.byteLength);
      if (et) throw new ht.n(et);
      const {
        json: Vt,
        bin: Ot
      } = (0, ht.z)(tt), qt = (0, vt.f)(Vt, Ot);
      if (qt) throw new ht.n(qt);
      try {
        return function(tt, et) {
          var Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt;
          const Nt = new Map,
            Mt = Vt => {
              let Ot = Nt.get(Vt);
              if (!Ot) {
                var qt;
                const Dt = tt.bufferViews[Vt],
                  mt = null !== (qt = Dt.byteOffset) && void 0 !== qt ? qt : 0;
                Ot = {
                  index: Vt,
                  bytes: et.subarray(mt, mt + Dt.byteLength),
                  byteStride: Dt.byteStride
                }, Nt.set(Vt, Ot)
              }
              return Ot
            },
            bt = new Map,
            Jt = et => {
              let Vt = bt.get(et);
              if (!Vt) {
                var Ot;
                const qt = tt.accessors[et];
                Vt = {
                  index: et,
                  count: qt.count,
                  type: qt.type,
                  numComponents: ht.q[qt.type],
                  componentType: qt.componentType,
                  normalized: null !== (Ot = qt.normalized) && void 0 !== Ot && Ot,
                  byteOffset: qt.byteOffset,
                  bufferView: void 0 === qt.bufferView ? null : Mt(qt.bufferView),
                  min: qt.min,
                  max: qt.max
                }, bt.set(et, Vt)
              }
              return Vt
            },
            Ct = null !== (Vt = null === (Ot = tt.extensionsUsed) || void 0 === Ot ? void 0 : Ot.includes("KHR_draco_mesh_compression")) && void 0 !== Vt && Vt,
            ut = (null !== (qt = tt.meshes) && void 0 !== qt ? qt : []).map(((et, Vt) => {
              const Ot = et.primitives.map(((et, Vt) => {
                var Ot, qt, Dt;
                const mt = Ct ? null === (Ot = et.extensions) || void 0 === Ot ? void 0 : Ot.KHR_draco_mesh_compression : void 0;
                let dt = null;
                const jt = [];
                if (mt) {
                  const Vt = {
                    vertices: tt.accessors[et.attributes.POSITION].count,
                    indices: void 0 === et.indices ? 0 : tt.accessors[et.indices].count,
                    components: {}
                  };
                  dt = {
                    bufferView: Mt(mt.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: Vt
                  };
                  for (const [Ot, qt] of ht.i) {
                    const Dt = mt.attributes[Ot];
                    if (void 0 === Dt) continue;
                    dt.attributeIds[qt] = Dt;
                    const jt = et.attributes[Ot];
                    var Ht;
                    if (void 0 !== jt) dt.normalized[qt] = null !== (Ht = tt.accessors[jt].normalized) && void 0 !== Ht && Ht, Vt.components[qt] = ht.q[tt.accessors[jt].type]
                  }
                } else
                  for (const [tt, Xt] of ht.i) {
                    const Vt = et.attributes[tt];
                    void 0 !== Vt && jt.push({
                      semantic: tt,
                      kind: Xt,
                      accessor: Jt(Vt)
                    })
                  }
                return {
                  index: Vt,
                  mode: null !== (qt = et.mode) && void 0 !== qt ? qt : 4,
                  attributes: jt,
                  indices: mt || void 0 === et.indices ? null : Jt(et.indices),
                  position: void 0 === et.attributes.POSITION ? null : Jt(et.attributes.POSITION),
                  material: null !== (Dt = et.material) && void 0 !== Dt ? Dt : null,
                  draco: dt
                }
              }));
              return {
                index: Vt,
                name: et.name,
                primitives: Ot,
                extras: et.extras
              }
            })),
            Kt = (null !== (Dt = tt.nodes) && void 0 !== Dt ? Dt : []).map(((tt, et) => {
              var Vt, Ot;
              return {
                index: et,
                name: tt.name,
                children: null !== (Vt = tt.children) && void 0 !== Vt ? Vt : [],
                mesh: null !== (Ot = tt.mesh) && void 0 !== Ot ? Ot : null,
                translation: tt.translation,
                rotation: tt.rotation,
                scale: tt.scale,
                hasCamera: void 0 !== tt.camera,
                extras: tt.extras
              }
            })),
            vt = null !== (mt = null === (dt = tt.extensionsUsed) || void 0 === dt ? void 0 : dt.includes("KHR_materials_unlit")) && void 0 !== mt && mt,
            St = null !== (jt = null === (Ht = tt.extensionsUsed) || void 0 === Ht ? void 0 : Ht.includes("KHR_texture_transform")) && void 0 !== jt && jt,
            ct = (null !== (Xt = tt.materials) && void 0 !== Xt ? Xt : []).map(((tt, et) => {
              var Vt, Ot, qt, Dt;
              const mt = tt.pbrMetallicRoughness,
                dt = null === mt || void 0 === mt ? void 0 : mt.baseColorTexture;
              return {
                index: et,
                name: tt.name,
                extras: tt.extras,
                unlit: vt && void 0 !== (null === (Vt = tt.extensions) || void 0 === Vt ? void 0 : Vt.KHR_materials_unlit),
                pbr: mt ? {
                  baseColorFactor: mt.baseColorFactor,
                  metallicFactor: mt.metallicFactor,
                  roughnessFactor: mt.roughnessFactor
                } : null,
                baseColorTexture: dt ? {
                  texture: dt.index,
                  transform: St && (null === (Ot = dt.extensions) || void 0 === Ot ? void 0 : Ot.KHR_texture_transform) || null
                } : null,
                emissiveFactor: tt.emissiveFactor,
                alphaMode: null !== (qt = tt.alphaMode) && void 0 !== qt ? qt : "OPAQUE",
                alphaCutoff: tt.alphaCutoff,
                doubleSided: null !== (Dt = tt.doubleSided) && void 0 !== Dt && Dt
              }
            })),
            Rt = (null !== (Qt = tt.textures) && void 0 !== Qt ? Qt : []).map(((et, Vt) => {
              var Ot, qt;
              const Dt = void 0 === et.sampler ? Wt : {
                index: et.sampler,
                ...null === (Ot = tt.samplers) || void 0 === Ot ? void 0 : Ot[et.sampler]
              };
              return {
                index: Vt,
                sampler: {
                  index: Dt.index,
                  magFilter: Dt.magFilter,
                  minFilter: Dt.minFilter,
                  wrapS: Dt.wrapS,
                  wrapT: Dt.wrapT
                },
                image: null !== (qt = et.source) && void 0 !== qt ? qt : -1
              }
            })),
            It = (null !== (lt = tt.images) && void 0 !== lt ? lt : []).map(((tt, et) => ({
              index: et,
              name: tt.name,
              mimeType: tt.mimeType,
              bufferView: Mt(tt.bufferView)
            }))),
            Pt = null !== (Et = (0, ht.w)(tt)) && void 0 !== Et ? Et : 0;
          return {
            json: tt,
            rootNodes: null !== (ft = null === (wt = tt.scenes) || void 0 === wt || null === (yt = wt[Pt]) || void 0 === yt ? void 0 : yt.nodes) && void 0 !== ft ? ft : [],
            nodes: Kt,
            meshes: ut,
            materials: ct,
            textures: Rt,
            images: It
          }
        }(Vt, Ot)
      } catch (Dt) {
        throw Dt instanceof ht.l ? Dt : new ht.l(`reading the GLB failed: ${Dt instanceof Error?Dt.message:String(Dt)}`)
      }
    }
    async function ct(tt, et) {
      var Vt, Ot;
      const qt = tt.draco;
      if (!qt) throw new ht.l("not a Draco primitive");
      let Dt;
      try {
        Dt = await et(qt.bufferView.bytes, qt.attributeIds, qt.expected)
      } catch (Ht) {
        throw new ht.l(`Draco decoding failed: ${Ht instanceof Error?Ht.message:String(Ht)}`)
      }
      const {
        vertices: mt,
        indices: dt,
        components: jt
      } = qt.expected;
      if (Dt.totalVertices !== mt || (null !== (Vt = null === (Ot = Dt.indices) || void 0 === Ot ? void 0 : Ot.length) && void 0 !== Vt ? Vt : 0) !== dt || Dt.attributes.some((tt => tt.size !== jt[tt.kind] || tt.data.length !== mt * tt.size))) throw new ht.l("Draco decoding gave other counts than the accessors declare");
      for (const Xt of Dt.attributes) {
        const tt = qt.normalized[Xt.kind];
        void 0 !== tt && (Xt.normalized = tt)
      }
      return Dt
    }
    const Rt = new WeakMap;

    function It(tt, et) {
      var Vt;
      const Ot = null !== (Vt = Rt.get(tt)) && void 0 !== Vt ? Vt : et(tt);
      return Rt.set(tt, Ot), Ot
    }

    function Pt(tt) {
      const et = tt.bufferView,
        Vt = 5125 === tt.componentType ? Uint32Array : Uint16Array,
        Ot = et.bytes.buffer,
        qt = et.bytes.byteOffset + (tt.byteOffset || 0);
      return qt % Vt.BYTES_PER_ELEMENT !== 0 ? new Vt(Ot.slice(qt, qt + tt.count * Vt.BYTES_PER_ELEMENT), 0) : new Vt(Ot, qt, tt.count)
    }

    function Zt(tt, et) {
      if (tt.min && tt.max) return [new Float64Array(tt.min), new Float64Array(tt.max)];
      const Vt = et.find((tt => {
          let {
            kind: et
          } = tt;
          return "position" === et
        })),
        Ot = Vt ? (0, Kt.g)(Vt, tt.count) : new Float32Array(0);
      return (0, Kt.t)(Ot.length / 3, ((tt, et) => Ot[3 * tt + et]))
    }

    function Lt(tt) {
      const et = tt.attributes.map((tt => {
          var et, Vt;
          let {
            kind: Ot,
            accessor: qt
          } = tt;
          const {
            bufferView: Dt,
            numComponents: mt
          } = qt;
          if (!Dt) {
            return {
              kind: Ot,
              data: It(qt, (() => new Float32Array(mt * qt.count))),
              offset: 0,
              stride: 4 * mt,
              components: mt,
              glType: 5126,
              isNormalized: !1
            }
          }
          const dt = null !== (et = Dt.byteStride) && void 0 !== et ? et : mt * ht.e[qt.componentType];
          return {
            kind: Ot,
            data: Dt.bytes,
            offset: null !== (Vt = qt.byteOffset) && void 0 !== Vt ? Vt : 0,
            stride: dt,
            components: mt,
            glType: qt.componentType,
            isNormalized: qt.normalized
          }
        })),
        Vt = tt.indices,
        Ot = Vt && It(Vt, Pt),
        qt = tt.position;
      return new Kt.d(et, Ot, qt.count, ...Zt(qt, et))
    }
    const Ft = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function kt(tt, et) {
      const Vt = et.attributes.map((tt => {
        let {
          kind: et,
          data: Vt,
          size: Ot,
          byteOffset: qt,
          byteStride: Dt,
          normalized: mt
        } = tt;
        return {
          kind: et,
          data: Vt,
          offset: qt,
          stride: Dt,
          components: Ot,
          glType: 5120 + Ft.indexOf(Vt.constructor),
          isNormalized: mt
        }
      }));
      return new Kt.d(Vt, et.indices, et.totalVertices, ...Zt(tt.position, Vt))
    }

    function Gt(tt) {
      const et = tt.lastIndexOf("/");
      return et < 0 ? tt : tt.substring(et + 1)
    }

    function zt(tt) {
      const et = tt.lastIndexOf("/");
      return et < 0 ? "" : tt.substring(0, et + 1)
    }

    function ot(tt) {
      return tt.name || `node${tt.index}`
    }
    const rt = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Ut = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      At = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function it(tt) {
      var et, Vt, Ot, qt;
      const Dt = null !== (et = tt.minFilter) && void 0 !== et ? et : 9987;
      return 9729 === (null !== (Vt = tt.magFilter) && void 0 !== Vt ? Vt : 9729) ? null !== (Ot = Ut[Dt]) && void 0 !== Ot ? Ot : 3 : null !== (qt = At[Dt]) && void 0 !== qt ? qt : 4
    }
    const Yt = {
      33071: 0,
      33648: 2
    };

    function Bt(tt) {
      var et;
      return null !== (et = Yt[null !== tt && void 0 !== tt ? tt : 10497]) && void 0 !== et ? et : 1
    }

    function pt(tt) {
      return 9728 === tt.minFilter || 9729 === tt.minFilter
    }

    function xt(tt) {
      var et, Vt, Ot;
      const qt = Float64Array.from(null !== (et = tt.scale) && void 0 !== et ? et : [1, 1, 1]);
      return tt.hasCamera && (qt[0] = -1), {
        translation: Float64Array.from(null !== (Vt = tt.translation) && void 0 !== Vt ? Vt : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Ot = tt.rotation) && void 0 !== Ot ? Ot : [0, 0, 0, 1]),
        scale: qt
      }
    }

    function Tt(tt, et) {
      let {
        translation: Vt,
        rotation: Ot,
        scale: qt
      } = tt;
      const Dt = new Float32Array(16);
      return (0, ut.c)(qt, 0, Ot, 0, Vt, 0, Dt), et && (0, ut.q)(Dt, et, 0, Dt), Dt
    }
    class gt {
      constructor(tt, et, Vt, Ot) {
        this.model = tt, this.decode = et, this.fileInfo = Vt, this.uniqueRootUrl = Ot, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const qt = new Set,
          Dt = (et, Vt) => {
            const Ot = tt.nodes[et];
            if (this.parents.has(Ot)) throw new ht.l(`/nodes/${et}: Invalid recursive node hierarchy`);
            this.parents.set(Ot, Vt);
            const mt = null === Ot.mesh ? [] : tt.meshes[Ot.mesh].primitives,
              dt = mt.map((tt => {
                const et = mt.length > 1;
                return {
                  name: et ? `${ot(Ot)}_primitive${tt.index}` : ot(Ot),
                  node: Ot,
                  primitive: tt,
                  part: et,
                  geometry: null
                }
              }));
            this.uses.set(Ot, dt);
            const jt = null !== Ot.mesh && qt.has(Ot.mesh);
            qt.add(Ot.mesh), this.own.set(Ot, jt ? [] : dt);
            for (const tt of Ot.children) Dt(tt, Ot)
          };
        for (const mt of tt.rootNodes) Dt(mt, null);
        this.primitives = tt.nodes.flatMap((tt => {
          var et;
          return null !== (et = this.own.get(tt)) && void 0 !== et ? et : []
        }))
      }
      decodeGeometries() {
        const tt = new Map;
        return Promise.all(this.primitives.map((async et => {
          const {
            primitive: Vt
          } = et, Ot = Vt.draco;
          let qt = Ot ? tt.get(Ot.bufferView.index) : Promise.resolve(Lt(Vt));
          qt || (qt = ct(Vt, this.decode).then((tt => kt(Vt, tt))), tt.set(Ot.bufferView.index, qt)), et.geometry = await qt
        })))
      }
      parentOf(tt) {
        var et;
        return null !== (et = this.parents.get(tt)) && void 0 !== et ? et : null
      }
      meshesUnder(tt) {
        const et = this.model.nodes.filter((tt => this.uses.has(tt)));
        for (const Ot of et) {
          const et = this.uses.get(Ot),
            Vt = et.find((et => et.name === tt));
          if (Vt) return 1 === et.length ? this.subtree(Ot) : this.own.get(Ot).includes(Vt) ? [Vt] : []
        }
        const Vt = et.find((et => 1 !== this.uses.get(et).length && ot(et) === tt));
        return Vt ? this.subtree(Vt) : null
      }
      subtree(tt) {
        return [...this.own.get(tt), ...tt.children.flatMap((tt => this.subtree(this.model.nodes[tt])))]
      }
      worldMatrix(tt, et, Vt) {
        let Ot = Tt(xt(et ? rt : {}), null);
        const qt = [];
        for (let mt = tt.part ? tt.node : this.parentOf(tt.node); mt; mt = this.parentOf(mt)) qt.unshift(mt);
        for (const mt of qt) Ot = Tt(xt(mt), Ot);
        const Dt = xt(tt.part ? {} : tt.node);
        return void 0 !== Vt && Dt.scale.fill(Vt), Tt(Dt, Ot)
      }
      floats(tt) {
        const {
          vertexAttributes: et,
          vertexCount: Vt
        } = tt.geometry;
        return new Map(et.map((tt => [tt.kind, (0, Kt.g)(tt, Vt)])))
      }
      imageUrl(tt) {
        return function(tt, et, Vt) {
          let {
            name: Ot
          } = et;
          return `data:${tt}${Ot}#image${Vt}`
        }(this.uniqueRootUrl, this.fileInfo, tt)
      }
      textureDesc(tt, et) {
        var Vt;
        let {
          texture: Ot,
          transform: qt
        } = tt;
        const {
          sampler: Dt,
          image: mt
        } = this.model.textures[Ot], {
          bufferView: dt,
          mimeType: jt,
          name: Ht
        } = this.model.images[mt], Xt = qt && {
          ...qt.offset ? {
            uOffset: qt.offset[0],
            vOffset: qt.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...qt.rotation ? {
            wAng: -qt.rotation
          } : {},
          ...qt.scale ? {
            uScale: qt.scale[0],
            vScale: qt.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(mt),
          noMipmap: pt(Dt),
          invertY: !1,
          samplingMode: it(Dt),
          data: {
            bytes: dt.bytes,
            mimeType: jt,
            label: Ht,
            context: `/textures/${Ot}`
          },
          sets: {
            wrapU: Bt(Dt.wrapS),
            wrapV: Bt(Dt.wrapT),
            ...Xt,
            coordinatesIndex: null !== (Vt = null === qt || void 0 === qt ? void 0 : qt.texCoord) && void 0 !== Vt ? Vt : 0,
            hasAlpha: et
          }
        }
      }
    }
    async function st(tt, et, Vt, Ot, qt, Dt) {
      let mt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const dt = function(tt, et, Vt) {
          return "string" !== typeof et ? {
            url: "",
            rootUrl: tt,
            name: Vt()
          } : et ? et.startsWith("data:") ? {
            url: et,
            rootUrl: tt,
            name: ""
          } : tt ? {
            url: tt + et,
            rootUrl: tt,
            name: et
          } : {
            url: et,
            rootUrl: zt(et),
            name: Gt(et)
          } : {
            url: tt,
            rootUrl: zt(tt),
            name: Gt(tt)
          }
        }(Vt, tt, qt),
        jt = {};
      et.addPendingData(jt);
      try {
        const Vt = St(await async function(tt, et) {
            return "string" !== typeof et ? et : tt.url.startsWith("data:") ? (0, ht.r)(tt.url) : await (0, ht.t)(tt.url)
          }(dt, tt)),
          jt = new gt(Vt, Ot, dt, function(tt, et) {
            let {
              rootUrl: Vt,
              name: Ot
            } = tt;
            return !Vt.startsWith("file:") && Ot ? Vt : `${Vt}${et()}/`
          }(dt, qt));
        return await Dt(jt), et.importedMeshesFiles && (et.loadingPluginName = "oR", mt && et.importedMeshesFiles.push(dt.url)), jt
      } finally {
        et.removePendingData(jt)
      }
    }
    var nt = Vt(37846),
      te = Vt(37694),
      ee = Vt(38147);

    function Ve(tt) {
      if (null === tt || void 0 === tt || !tt.min || !tt.max) return null;
      const [et, Vt, Ot] = tt.min, [qt, Dt, mt] = tt.max, {
        BoundingInfo: dt,
        uf: jt
      } = (0, nt.e)();
      return new dt(new jt(et, Vt, Ot), new jt(qt, Dt, mt))
    }

    function Oe(tt) {
      (0, te.f)(tt) || (tt.geometry && tt.geometry.useBoundingInfoFromGeometry ? tt._updateBoundingInfo() : tt.refreshBoundingInfo(!0, !0))
    }
    class qe {
      constructor(tt, et) {
        this.Fw = tt, this.decode = et, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(tt) {
        let et = this.viewData.get(tt.index);
        return et || (et = this.bufferData.then((() => tt.bytes)), this.viewData.set(tt.index, et)), et
      }
      viewBuffer(tt) {
        let et = this.viewBuffers.get(tt.index);
        return et || (et = this.viewBytes(tt).then((tt => new((0, nt.e)().mf)(this.Fw.Jf(), tt, !1))), this.viewBuffers.set(tt.index, et)), et
      }
      vertexBuffer(tt, et) {
        const {
          kind: Vt,
          data: Ot
        } = et, qt = `${tt.index}:${Vt}`;
        let Dt = this.vertexBuffers.get(qt);
        if (!Dt) {
          const mt = tt.bufferView;
          Dt = mt ? this.viewBuffer(mt).then((tt => this.layoutVertexBuffer(tt, et))) : Promise.resolve(Ot).then((tt => new((0, nt.e)().VertexBuffer)(this.Fw.Jf(), tt, Vt, !1))), this.vertexBuffers.set(qt, Dt)
        }
        return Dt
      }
      layoutVertexBuffer(tt, et) {
        let {
          kind: Vt,
          offset: Ot,
          stride: qt,
          components: Dt,
          glType: mt,
          isNormalized: dt
        } = et;
        const jt = this.Fw.Jf();
        return new((0, nt.e)().VertexBuffer)(jt, tt, Vt, !1, void 0, qt, void 0, Ot, Dt, mt, dt, !0, void 0, !0)
      }
      load(tt, et, Vt) {
        const Ot = (0, te.f)(Vt),
          qt = tt => {
            Ot || (Vt._delayInfo = Vt._delayInfo || [], -1 === Vt._delayInfo.indexOf(tt) && Vt._delayInfo.push(tt))
          },
          Dt = et.draco;
        if (Dt) {
          for (const tt in Dt.attributeIds) qt(tt);
          let mt = this.dracoGeometry.get(Dt.bufferView.index);
          return mt || (mt = this.viewBytes(Dt.bufferView).then((async () => {
            let qt;
            try {
              qt = await ct(et, this.decode)
            } catch (jt) {
              throw new ht.l(`${tt}: ${jt instanceof Error?jt.message:String(jt)}`)
            }
            const Dt = kt(et, qt);
            if (Ot) return Dt;
            const mt = Ve(et.position),
              dt = new((0, nt.e)().MirroredGeometry)(Vt.name, this.Fw);
            mt && (dt._boundingInfo = mt, dt.useBoundingInfoFromGeometry = !0), Dt.indexData && dt.setIndices(Dt.indexData);
            for (const tt of Dt.vertexAttributes) dt.setVerticesBuffer(this.layoutVertexBuffer(tt.data, tt), Dt.vertexCount);
            return dt.link(Dt), dt
          })), this.dracoGeometry.set(Dt.bufferView.index, mt)), mt
        }
        const mt = [],
          dt = Lt(et);
        if (Ot) return Vt.isUnIndexed = !dt.indexData, Vt.hasVertexAlpha = (0, ee.d)(et), Promise.resolve(dt);
        const jt = new((0, nt.e)().MirroredGeometry)(Vt.name, this.Fw),
          {
            indexData: Ht
          } = dt;
        Ht ? mt.push(this.viewBytes(et.indices.bufferView).then((() => {
          jt.setIndices(Ht)
        }))) : Vt.isUnIndexed = !0;
        for (const [Xt, {
            kind: Qt,
            accessor: lt
          }] of et.attributes.entries()) qt(Qt), mt.push(this.vertexBuffer(lt, dt.vertexAttributes[Xt]).then((tt => {
          if ("position" === tt.getKind()) {
            const tt = Ve(lt);
            tt && (jt._boundingInfo = tt, jt.useBoundingInfoFromGeometry = !0)
          }
          jt.setVerticesBuffer(tt, dt.vertexCount)
        })));
        return (0, ee.d)(et) && (Vt.hasVertexAlpha = !0), Promise.all(mt).then((() => (jt.link(dt), jt)))
      }
    }
    var De, me = Vt(37564),
      de = Vt(37331),
      je = Vt(38157),
      He = Vt(37502),
      Xe = Vt(37545),
      Qe = Vt(2848),
      le = Vt(37531);

    function Ee(tt, et) {
      tt.metadata = tt.metadata || {};
      const Vt = tt._internalMetadata = tt._internalMetadata || {},
        Ot = Vt.oR = Vt.oR || {};
      (Ot.pointers = Ot.pointers || []).push(et)
    }

    function fe(tt, et) {
      if (et && Object.keys(et).length > 0) {
        const Vt = tt.metadata = tt.metadata || {};
        (Vt.oR = Vt.oR || {}).extras = et
      }
    }

    function we(tt, et) {
      et.position = tt.translation ? de.uf.FromArray(tt.translation) : de.uf.Zero(), et.rotationQuaternion = tt.rotation ? de.Quaternion.FromArray(tt.rotation) : de.Quaternion.Identity(), et.cj = tt.scale ? de.uf.FromArray(tt.scale) : de.uf.One()
    }
    class ye {
      constructor(tt, et) {
        if (this.Fw = tt, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, et) {
          const et = tt.Jf(),
            Vt = tt.ZI.add((() => {
              this.dispose()
            })),
            Ot = et.bf.add((() => {
              for (const tt of [...this.geometries, ...this.meshes, ...this.textures]) tt._rebuild()
            }));
          this.release = () => {
            tt.ZI.remove(Vt), et.bf.remove(Ot)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const tt of this.meshes) this.Fw.oOt(tt);
          for (const tt of this.materials) this.Fw.addMaterial(tt);
          for (const tt of this.geometries) this.Fw.addGeometry(tt);
          for (const tt of this.transformNodes) this.Fw.addTransformNode(tt);
          for (const tt of this.textures) this.Fw.addTexture(tt)
        }
      }
      dispose() {
        var tt;
        for (const et of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const tt of et.slice()) tt.dispose();
          et.length = 0
        }
        null === (tt = this.release) || void 0 === tt || tt.call(this), this.release = null
      }
    }
    class Ne {
      constructor(tt, et, Vt, Ot, qt, Dt, mt) {
        this.asset = tt, this.Fw = et, this.tree = Vt, this.geometryData = qt, this.materials = Dt, this.lite = mt, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Ot ? Vt : null
      }
      create(tt) {
        if (this.lite) return tt();
        const et = this.Fw;
        et._blockEntityCollection = !!this.container;
        try {
          const et = tt();
          return this.container && (et._parentContainer = this.container), et
        } finally {
          et._blockEntityCollection = !1
        }
      }
      node(tt, et) {
        return this.create((() => this.lite ? et ? (0, je.f)(this.lite, tt) : (0, je.r)(this.lite, tt) : et ? new((0, nt.e)().Mesh)(tt, this.Fw) : new((0, nt.e)().TransformNode)(tt, this.Fw)))
      }
      async load() {
        var tt;
        this.asset.model.json.nodes && this.createRoot();
        const et = this.lite ? null : this.Fw,
          Vt = null !== (tt = null === et || void 0 === et ? void 0 : et.blockMaterialDirtyMechanism) && void 0 !== tt && tt;
        let Ot;
        et && (et.blockMaterialDirtyMechanism = !0);
        try {
          Ot = this.loadScene()
        } finally {
          null === et || void 0 === et || et._forceBlockMaterialDirtyMechanism(Vt)
        }
        await Ot;
        const {
          root: qt,
          tree: Dt
        } = this;
        qt && (qt.Av(!0), Dt.meshes.push(qt), Dt.rootNodes.push(qt));
        for (const dt of this.asset.model.nodes) {
          const tt = this.nodeObjects.get(dt.index);
          tt && ["TransformNode", "LiteNode"].includes(tt.getClassName()) && Dt.transformNodes.push(tt);
          for (const et of null !== (mt = this.nodePrimitives.get(dt.index)) && void 0 !== mt ? mt : []) {
            var mt;
            Dt.meshes.push(et);
            const tt = et.geometry;
            tt && !Dt.geometries.includes(tt) && Dt.geometries.push(tt)
          }
        }
      }
      createRoot() {
        const tt = this.node("__root__", !0);
        this.root = tt, tt.Av(!1), this.Fw.useRightHandedSystem || we(rt, tt)
      }
      loadScene() {
        const tt = [];
        for (const et of this.asset.model.rootNodes) tt.push(this.loadNode(this.asset.model.nodes[et], (tt => {
          tt.parent = this.root
        })));
        return tt.push(Promise.resolve()), Promise.all(tt).then((() => {}))
      }
      loadNode(tt, et) {
        const Vt = `/nodes/${tt.index}`,
          Ot = [],
          qt = qt => {
            if (Ee(qt, Vt), we(tt, qt), tt.hasCamera && !this.Fw.useRightHandedSystem) {
              const {
                cj: tt
              } = qt;
              tt.set(-1, tt.y, tt.z)
            }
            for (const et of tt.children) Ot.push(this.loadNode(this.asset.model.nodes[et], (tt => {
              tt.parent = qt
            })));
            (Vt => {
              fe(Vt, tt.extras), et(Vt)
            })(qt)
          };
        if (null === tt.mesh) {
          const et = this.node(ot(tt), !1);
          this.nodeObjects.set(tt.index, et), qt(et)
        } else {
          const et = this.asset.model.meshes[tt.mesh];
          Ot.push(this.loadMesh(`/meshes/${et.index}`, tt, et, qt))
        }
        return Promise.all(Ot).then((() => {
          for (const Vt of null !== (et = this.nodePrimitives.get(tt.index)) && void 0 !== et ? et : []) {
            var et;
            Oe(Vt)
          }
          return this.nodeObjects.get(tt.index)
        }))
      }
      loadMesh(tt, et, Vt, Ot) {
        const qt = [],
          Dt = ot(et);
        if (1 === Vt.primitives.length) {
          const Ot = Vt.primitives[0];
          qt.push(this.loadPrimitive(`${tt}/primitives/${Ot.index}`, Dt, Ot, (tt => {
            this.nodeObjects.set(et.index, tt), this.nodePrimitives.set(et.index, [tt])
          })))
        } else {
          const Ot = this.node(Dt, !1);
          this.nodeObjects.set(et.index, Ot);
          const mt = [];
          this.nodePrimitives.set(et.index, mt);
          for (const et of Vt.primitives) qt.push(this.loadPrimitive(`${tt}/primitives/${et.index}`, `${Dt}_primitive${et.index}`, et, (tt => {
            tt.parent = Ot, mt.push(tt)
          })))
        }
        const mt = this.nodeObjects.get(et.index);
        return Ot(mt), Promise.all(qt).then((() => mt))
      }
      loadPrimitive(tt, et, Vt, Ot) {
        const qt = [],
          Dt = this.node(et, !0);
        if (Dt.sideOrientation = this.Fw.useRightHandedSystem ? He.e.CounterClockWiseSideOrientation : He.e.ClockWiseSideOrientation, qt.push(this.geometryData.load(tt, Vt, Dt).then((tt => {
            if ((0, te.f)(Dt)) {
              var et, Vt;
              const Ot = tt;
              Dt.replaceModel(Ot, Int32Array.of(0, null !== (et = null === (Vt = Ot.indexData) || void 0 === Vt ? void 0 : Vt.length) && void 0 !== et ? et : Ot.vertexCount, 0, Ot.vertexCount))
            } else this.create((() => (tt.applyToMesh(Dt), tt)))
          }))), this.materials) {
          const tt = 0 === Vt.mode ? He.e.PointListDrawMode : He.e.TriangleFillMode,
            et = null === Vt.material ? null : this.asset.model.materials[Vt.material];
          qt.push(this.loadMaterial(et, tt, (tt => {
            Dt.material = tt
          })))
        }
        return Ee(Dt, tt), Ot(Dt), Promise.all(qt).then((() => Dt))
      }
      loadMaterial(tt, et, Vt) {
        var Ot;
        const qt = `${null!==(Ot=null===tt||void 0===tt?void 0:tt.index)&&void 0!==Ot?Ot:"default"}:${et}`;
        let Dt = this.materialData.get(qt);
        return Dt || (Dt = this.createMaterial(tt, et), this.materialData.set(qt, Dt)), Vt(Dt.material), Dt.promise
      }
      createMaterial(tt, et) {
        const Vt = tt ? tt.name || `material${tt.index}` : "__GLTFLoader._default",
          {
            style: Ot,
            unlit: qt
          } = this.materials;
        let Dt;
        const mt = this.create((() => {
          const mt = (0, le.d)({
            name: Vt,
            Fw: this.Fw,
            sets: {
              ...(0, ee.c)(this.asset, tt, Ot, qt),
              fillMode: et
            },
            unrendered: !0
          });
          return Dt = mt.model, mt.mirror
        }));
        let dt = Promise.resolve();
        if (tt) {
          const et = `/materials/${tt.index}`,
            Ot = Dt.diffuseTexture;
          if (Ot && !Ot.mirror) dt = new Promise((tt => setTimeout(tt)));
          else if (Ot) {
            const qt = Ot.mirror;
            qt._parentContainer = this.container, qt.name = `${Vt} (Base Color)`, Ee(qt, `${et}${tt.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(qt), dt = (0, Xe.v)(Ot)
          }
          fe(mt, tt.extras), Ee(mt, et)
        }
        return this.tree.materials.push(mt), {
          material: mt,
          promise: dt
        }
      }
    }

    function ae() {
      me.f.dracoDecodes = wt.decodes, me.f.dracoWorkersStarted = wt.workersStarted, me.f.dracoMostWorkers = wt.mostWorkers
    }
    async function Me(tt, et, Vt, qt, Dt) {
      try {
        return await async function(tt, et, Vt, qt, Dt, mt) {
          var dt;
          let jt;
          const Ht = null === (dt = (0, Qe.e)()) || void 0 === dt ? void 0 : dt.Bf,
            Xt = null !== Ht && void 0 !== Ht && Ht.pf && et === Ht.vI() ? Ht : null,
            Qt = Dt && !Xt;
          return await st(tt, et, Vt, qt, Ot.b, (tt => (jt = new ye(et, Qt), new Ne(tt, et, jt, Qt, new qe(et, qt), mt, Xt).load())), !Dt), jt
        }(tt, et, Vt, Ct, qt, Dt)
      } finally {
        ae()
      }
    }
    async function be(tt, et, Vt, qt) {
      try {
        return await st(tt, et, Vt, Ct, Ot.b, (tt => qt(tt, new qe(et, Ct))))
      } finally {
        ae()
      }
    }
    De = qt.b, Xt || (Xt = {
      scriptUrl: new URL(De.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(De.wasmBinaryUrl, location.href).href
    })
  },
  41743: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(153),
      qt = Vt(1169);

    function Dt(tt) {
      return (0, Ot.isDiscordClient)() ? `https://${qt.e.discordDomain}/${tt.href}` : tt.href
    }
    const mt = {
      scriptUrl: Dt(new Vt.U(Vt(41748))),
      wasmBinaryUrl: Dt(new Vt.U(Vt(41755)))
    }
  },
  36471: tt => {
    tt.exports = function(tt, et, Vt, Ot) {
      var qt = self || window;
      try {
        try {
          var Dt;
          try {
            Dt = new qt.Blob([tt])
          } catch (Ht) {
            (Dt = new(qt.BlobBuilder || qt.WebKitBlobBuilder || qt.MozBlobBuilder || qt.MSBlobBuilder)).append(tt), Dt = Dt.getBlob()
          }
          var mt = qt.URL || qt.webkitURL,
            dt = mt.createObjectURL(Dt),
            jt = new qt[et](dt, Vt);
          return mt.revokeObjectURL(dt), jt
        } catch (Ht) {
          return new qt[et]("data:application/javascript,".concat(encodeURIComponent(tt)), Vt)
        }
      } catch (Ht) {
        if (!Ot) throw Error("Inline worker is not supported");
        return new qt[et](Ot, Vt)
      }
    }
  },
  41748: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41755: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
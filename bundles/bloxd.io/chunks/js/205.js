export const id = 205;
export const ids = [205];
export const modules = {
  41490: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      loadGlbAsset: () => KF,
      loadGlbTree: () => PF
    });
    var Xk = Ik(37902),
      Tk = Ik(41499),
      ik = Ik(36217),
      yk = Ik.n(ik);

    function lk() {
      return yk()('(()=>{class kk extends Error{}function Fk(Fk,Ik){const Xk=Fk._malloc(Ik);if(0===Xk)throw new kk(`Draco: the decoder\'s heap refused ${Ik} bytes`);return Xk}function Ik(kk){return{[kk.DT_FLOAT32]:[Float32Array,5126],[kk.DT_INT8]:[Int8Array,5120],[kk.DT_INT16]:[Int16Array,5122],[kk.DT_INT32]:[Int32Array,5124],[kk.DT_UINT8]:[Uint8Array,5121],[kk.DT_UINT16]:[Uint16Array,5123],[kk.DT_UINT32]:[Uint32Array,5125]}}function Xk(Fk,Xk,Tk,ik,yk){let lk=null,ak=null,qk=null;try{lk=new Fk.Decoder,ak=new Fk.DecoderBuffer,ak.Init(Xk,Xk.byteLength);let Lk=0;const tk=lk.GetEncodedGeometryType(ak);if(tk===Fk.TRIANGULAR_MESH){const Ik=new Fk.Mesh;qk=Ik;const Xk=lk.DecodeBufferToMesh(ak,Ik);if(!Xk.ok()||0===Ik.ptr)throw new kk(Xk.error_msg());Lk=3*Ik.num_faces()}else{if(tk!==Fk.POINT_CLOUD)throw new kk(`Draco: Cannot decode invalid geometry type ${tk}`);{const Ik=new Fk.PointCloud;qk=Ik;const Xk=lk.DecodeBufferToPointCloud(ak,Ik);if(!Xk.ok()||!Ik.ptr)throw new kk(Xk.error_msg())}}const Zk=qk.num_points();if(Zk!==ik.vertices||Lk!==ik.indices)throw new kk(`Draco: decoded ${Zk} vertices and ${Lk} indices, the accessors declare ${ik.vertices} and ${ik.indices}`);const jk=Ik(Fk),ek=[];for(const{kind:Fk,id:Ik,components:Xk}of Tk){const Tk=lk.GetAttributeByUniqueId(qk,Ik);if(!Tk||0===Tk.ptr)throw new kk(`Draco: no attribute with id ${Ik} (${Fk})`);const ik=Tk.data_type();if(!jk[ik])throw new kk(`Draco: Cannot decode invalid data type ${ik}`);if(Tk.num_components()!==Xk)throw new kk(`Draco: ${Fk} decodes to ${Tk.num_components()} components, its accessor declares ${Xk}`);ek.push([Fk,Tk,ik])}return yk({dracoDecoder:lk,geometry:qk,triangles:tk===Fk.TRIANGULAR_MESH,numPoints:Zk,numIndices:Lk,attributes:ek})}finally{qk&&Fk.destroy(qk),ak&&Fk.destroy(ak),lk&&Fk.destroy(lk)}}const Tk=self;let ik=null;self.onmessage=kk=>{let{data:yk}=kk;if("init"===yk.id){try{importScripts(yk.url),ik=DracoDecoderModule({wasmBinary:yk.wasmBinary}),Tk.postMessage({id:"initDone"})}catch(tk){Tk.postMessage({id:"initError",message:tk instanceof Error?tk.message:String(tk)})}return}const{seq:lk,data:ak,attributeIds:qk,expected:Lk}=yk;ik?ik.then((kk=>{try{const ik=function(kk,Tk,ik,yk){const lk=Object.keys(ik).map((kk=>({kind:kk,id:ik[kk],components:yk.components[kk]})));return Xk(kk,Tk,lk,yk,(Xk=>{let{dracoDecoder:Tk,geometry:ik,triangles:yk,numPoints:lk,numIndices:ak,attributes:qk}=Xk;const Lk=Ik(kk);let tk=null;if(yk){const Ik=4*ak,Xk=Fk(kk,Ik);try{Tk.GetTrianglesUInt32Array(ik,Ik,Xk),tk=new Uint32Array(ak),tk.set(new Uint32Array(kk.HEAPF32.buffer,Xk,ak))}finally{kk._free(Xk)}}const Zk=[];for(const[Ik,jk,ek]of qk){const[Xk]=Lk[ek],yk=jk.num_components(),ak=lk*yk,qk=ak*Xk.BYTES_PER_ELEMENT,tk=Fk(kk,qk);try{Tk.GetAttributeDataArrayForAllPoints(ik,jk,ek,qk,tk),Zk.push({kind:Ik,data:new Xk(kk.HEAPF32.buffer,tk,ak).slice(),size:yk,byteOffset:jk.byte_offset(),byteStride:jk.byte_stride(),normalized:jk.normalized()})}finally{kk._free(tk)}}return{indices:tk,attributes:Zk,totalVertices:lk}}))}(kk,ak,qk,Lk),yk=ik.attributes.map((kk=>kk.data.buffer));ik.indices&&yk.push(ik.indices.buffer),Tk.postMessage({id:"decoded",seq:lk,...ik},yk)}catch(tk){Tk.postMessage({id:"decodeError",seq:lk,message:tk instanceof Error?tk.message:String(tk)})}}),(kk=>{Tk.postMessage({id:"decodeError",seq:lk,message:kk instanceof Error?kk.message:String(kk)})})):Tk.postMessage({id:"decodeError",seq:lk,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, Ik.p + "dracoDecode.worker.5373bdac.worker.js")
    }
    var ak = Ik(95);
    const qk = 1e3;
    let Lk = null,
      tk = null;
    const Zk = [],
      jk = [];
    let ek = 0;
    const wk = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      Hk = function(kk, Fk) {
        const Ik = kk ? Math.max(1, Math.min(Math.floor(.5 * kk), 4)) : 1;
        return Fk ? Math.min(Ik, 2) : Ik
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, ak.isMobile)());

    function Jk() {
      if (!Lk) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: kk,
        wasmBinaryUrl: Fk
      } = Lk;
      return tk ??= fetch(Fk).then((kk => {
        if (!kk.ok) throw new Error(`Draco: fetching ${Fk} failed: ${kk.status}`);
        return kk.arrayBuffer()
      })), tk.catch((() => {
        tk = null
      })), wk.workersStarted++, tk.then((Fk => new Promise(((Ik, Xk) => {
        const Tk = new lk;
        Tk.onerror = kk => {
          Tk.onmessage = null, Tk.onerror = null, Tk.terminate(), Xk(new Error("Draco: the decode worker failed to start" + (kk.message ? `: ${kk.message}` : " (its script did not load)")))
        }, Tk.onmessage = kk => {
          let {
            data: Fk
          } = kk;
          Tk.onmessage = null, Tk.onerror = null, "initDone" === Fk.id ? Ik(Tk) : (Tk.terminate(), Xk(new Error(`Draco: ${"initError"===Fk.id?Fk.message:"the worker did not start"}`)))
        };
        const ik = Fk.slice(0),
          yk = {
            id: "init",
            url: kk,
            wasmBinary: ik
          };
        Tk.postMessage(yk, [ik])
      }))))
    }

    function xk(kk) {
      const Fk = Zk.indexOf(kk); - 1 !== Fk && Zk.splice(Fk, 1);
      const Ik = jk.shift();
      Ik && Kk(Ik)
    }

    function Pk(kk, Fk) {
      kk.busy = !0, kk.releaseTimer && (clearTimeout(kk.releaseTimer), kk.releaseTimer = null);
      kk.worker.then((Ik => {
        const Xk = ek++;
        Ik.onmessage = Tk => {
          let {
            data: ik
          } = Tk;
          if (("decoded" === ik.id || "decodeError" === ik.id) && ik.seq === Xk) {
            if (Ik.onmessage = null, Ik.onerror = null, "decoded" === ik.id) return wk.decodes++, Fk.resolve({
              indices: ik.indices,
              attributes: ik.attributes,
              totalVertices: ik.totalVertices
            }), void(() => {
              const Fk = jk.shift();
              Fk ? Pk(kk, Fk) : (kk.busy = !1, kk.releaseTimer = setTimeout((() => {
                const Fk = Zk.indexOf(kk); - 1 !== Fk && Zk.splice(Fk, 1), kk.worker.then((kk => {
                  kk.terminate()
                }))
              }), qk))
            })();
            Ik.terminate(), Fk.reject(new Error(ik.message)), xk(kk)
          }
        }, Ik.onerror = Xk => {
          Ik.onmessage = null, Ik.onerror = null, Ik.terminate(), Fk.reject(new Error(`Draco: the decode worker failed: ${Xk.message}`)), xk(kk)
        };
        const Tk = {
          id: "decode",
          seq: Xk,
          data: Fk.data,
          attributeIds: Fk.attributeIds,
          expected: Fk.expected
        };
        Ik.postMessage(Tk, [Fk.data.buffer])
      }), (Ik => {
        Fk.reject(Ik instanceof Error ? Ik : new Error(String(Ik))), xk(kk)
      }))
    }

    function Kk(kk) {
      const Fk = Zk.find((kk => !kk.busy));
      if (Fk) Pk(Fk, kk);
      else {
        if (Zk.length < Hk) {
          const Fk = {
            worker: Jk(),
            busy: !0,
            releaseTimer: null
          };
          return Zk.push(Fk), wk.mostWorkers = Math.max(wk.mostWorkers, Zk.length), void Pk(Fk, kk)
        }
        jk.push(kk)
      }
    }

    function Qk(kk, Fk, Ik) {
      return new Promise(((Xk, Tk) => {
        Kk({
          data: new Int8Array(kk.buffer, kk.byteOffset, kk.byteLength).slice(),
          attributeIds: Fk,
          expected: Ik,
          resolve: Xk,
          reject: Tk
        })
      }))
    }
    var sk = Ik(37503),
      Vk = Ik(37519),
      zk = Ik(34262),
      Sk = Ik(34257);
    const vk = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Ek(kk) {
      const Fk = (0, Sk.f)(kk.byteLength);
      if (Fk) throw new zk.m(Fk);
      const {
        json: Ik,
        bin: Xk
      } = (0, zk.v)(kk), Tk = (0, Sk.e)(Ik, Xk);
      if (Tk) throw new zk.m(Tk);
      try {
        return function(kk, Fk) {
          var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk;
          const Jk = new Map,
            xk = Ik => {
              let Xk = Jk.get(Ik);
              if (!Xk) {
                var Tk;
                const ik = kk.bufferViews[Ik],
                  yk = null !== (Tk = ik.byteOffset) && void 0 !== Tk ? Tk : 0;
                Xk = {
                  index: Ik,
                  bytes: Fk.subarray(yk, yk + ik.byteLength),
                  byteStride: ik.byteStride
                }, Jk.set(Ik, Xk)
              }
              return Xk
            },
            Pk = new Map,
            Kk = Fk => {
              let Ik = Pk.get(Fk);
              if (!Ik) {
                var Xk;
                const Tk = kk.accessors[Fk];
                Ik = {
                  index: Fk,
                  count: Tk.count,
                  type: Tk.type,
                  numComponents: zk.o[Tk.type],
                  componentType: Tk.componentType,
                  normalized: null !== (Xk = Tk.normalized) && void 0 !== Xk && Xk,
                  byteOffset: Tk.byteOffset,
                  bufferView: void 0 === Tk.bufferView ? null : xk(Tk.bufferView),
                  min: Tk.min,
                  max: Tk.max
                }, Pk.set(Fk, Ik)
              }
              return Ik
            },
            Qk = null !== (Ik = null === (Xk = kk.extensionsUsed) || void 0 === Xk ? void 0 : Xk.includes("KHR_draco_mesh_compression")) && void 0 !== Ik && Ik,
            sk = (null !== (Tk = kk.meshes) && void 0 !== Tk ? Tk : []).map(((Fk, Ik) => {
              const Xk = Fk.primitives.map(((Fk, Ik) => {
                var Xk, Tk, ik;
                const yk = Qk ? null === (Xk = Fk.extensions) || void 0 === Xk ? void 0 : Xk.KHR_draco_mesh_compression : void 0;
                let lk = null;
                const ak = [];
                if (yk) {
                  const Ik = {
                    vertices: kk.accessors[Fk.attributes.POSITION].count,
                    indices: void 0 === Fk.indices ? 0 : kk.accessors[Fk.indices].count,
                    components: {}
                  };
                  lk = {
                    bufferView: xk(yk.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: Ik
                  };
                  for (const [Xk, Tk] of zk.h) {
                    const ik = yk.attributes[Xk];
                    if (void 0 === ik) continue;
                    lk.attributeIds[Tk] = ik;
                    const ak = Fk.attributes[Xk];
                    var qk;
                    if (void 0 !== ak) lk.normalized[Tk] = null !== (qk = kk.accessors[ak].normalized) && void 0 !== qk && qk, Ik.components[Tk] = zk.o[kk.accessors[ak].type]
                  }
                } else
                  for (const [kk, Lk] of zk.h) {
                    const Ik = Fk.attributes[kk];
                    void 0 !== Ik && ak.push({
                      semantic: kk,
                      kind: Lk,
                      accessor: Kk(Ik)
                    })
                  }
                return {
                  index: Ik,
                  mode: null !== (Tk = Fk.mode) && void 0 !== Tk ? Tk : 4,
                  attributes: ak,
                  indices: yk || void 0 === Fk.indices ? null : Kk(Fk.indices),
                  position: void 0 === Fk.attributes.POSITION ? null : Kk(Fk.attributes.POSITION),
                  material: null !== (ik = Fk.material) && void 0 !== ik ? ik : null,
                  draco: lk
                }
              }));
              return {
                index: Ik,
                name: Fk.name,
                primitives: Xk,
                extras: Fk.extras
              }
            })),
            Vk = (null !== (ik = kk.nodes) && void 0 !== ik ? ik : []).map(((kk, Fk) => {
              var Ik, Xk;
              return {
                index: Fk,
                name: kk.name,
                children: null !== (Ik = kk.children) && void 0 !== Ik ? Ik : [],
                mesh: null !== (Xk = kk.mesh) && void 0 !== Xk ? Xk : null,
                translation: kk.translation,
                rotation: kk.rotation,
                scale: kk.scale,
                hasCamera: void 0 !== kk.camera,
                extras: kk.extras
              }
            })),
            Sk = null !== (yk = null === (lk = kk.extensionsUsed) || void 0 === lk ? void 0 : lk.includes("KHR_materials_unlit")) && void 0 !== yk && yk,
            Ek = null !== (ak = null === (qk = kk.extensionsUsed) || void 0 === qk ? void 0 : qk.includes("KHR_texture_transform")) && void 0 !== ak && ak,
            Ok = (null !== (Lk = kk.materials) && void 0 !== Lk ? Lk : []).map(((kk, Fk) => {
              var Ik, Xk, Tk, ik;
              const yk = kk.pbrMetallicRoughness,
                lk = null === yk || void 0 === yk ? void 0 : yk.baseColorTexture;
              return {
                index: Fk,
                name: kk.name,
                extras: kk.extras,
                unlit: Sk && void 0 !== (null === (Ik = kk.extensions) || void 0 === Ik ? void 0 : Ik.KHR_materials_unlit),
                pbr: yk ? {
                  baseColorFactor: yk.baseColorFactor,
                  metallicFactor: yk.metallicFactor,
                  roughnessFactor: yk.roughnessFactor
                } : null,
                baseColorTexture: lk ? {
                  texture: lk.index,
                  transform: Ek && (null === (Xk = lk.extensions) || void 0 === Xk ? void 0 : Xk.KHR_texture_transform) || null
                } : null,
                emissiveFactor: kk.emissiveFactor,
                alphaMode: null !== (Tk = kk.alphaMode) && void 0 !== Tk ? Tk : "OPAQUE",
                alphaCutoff: kk.alphaCutoff,
                doubleSided: null !== (ik = kk.doubleSided) && void 0 !== ik && ik
              }
            })),
            nk = (null !== (tk = kk.textures) && void 0 !== tk ? tk : []).map(((Fk, Ik) => {
              var Xk, Tk;
              const ik = void 0 === Fk.sampler ? vk : {
                index: Fk.sampler,
                ...null === (Xk = kk.samplers) || void 0 === Xk ? void 0 : Xk[Fk.sampler]
              };
              return {
                index: Ik,
                sampler: {
                  index: ik.index,
                  magFilter: ik.magFilter,
                  minFilter: ik.minFilter,
                  wrapS: ik.wrapS,
                  wrapT: ik.wrapT
                },
                image: null !== (Tk = Fk.source) && void 0 !== Tk ? Tk : -1
              }
            })),
            Gk = (null !== (Zk = kk.images) && void 0 !== Zk ? Zk : []).map(((kk, Fk) => ({
              index: Fk,
              name: kk.name,
              mimeType: kk.mimeType,
              bufferView: xk(kk.bufferView)
            }))),
            pk = null !== (jk = (0, zk.u)(kk)) && void 0 !== jk ? jk : 0;
          return {
            json: kk,
            rootNodes: null !== (ek = null === (wk = kk.scenes) || void 0 === wk || null === (Hk = wk[pk]) || void 0 === Hk ? void 0 : Hk.nodes) && void 0 !== ek ? ek : [],
            nodes: Vk,
            meshes: sk,
            materials: Ok,
            textures: nk,
            images: Gk
          }
        }(Ik, Xk)
      } catch (ik) {
        throw ik instanceof zk.l ? ik : new zk.l(`reading the GLB failed: ${ik instanceof Error?ik.message:String(ik)}`)
      }
    }
    async function Ok(kk, Fk) {
      var Ik, Xk;
      const Tk = kk.draco;
      if (!Tk) throw new zk.l("not a Draco primitive");
      let ik;
      try {
        ik = await Fk(Tk.bufferView.bytes, Tk.attributeIds, Tk.expected)
      } catch (qk) {
        throw new zk.l(`Draco decoding failed: ${qk instanceof Error?qk.message:String(qk)}`)
      }
      const {
        vertices: yk,
        indices: lk,
        components: ak
      } = Tk.expected;
      if (ik.totalVertices !== yk || (null !== (Ik = null === (Xk = ik.indices) || void 0 === Xk ? void 0 : Xk.length) && void 0 !== Ik ? Ik : 0) !== lk || ik.attributes.some((kk => kk.size !== ak[kk.kind] || kk.data.length !== yk * kk.size))) throw new zk.l("Draco decoding gave other counts than the accessors declare");
      for (const Lk of ik.attributes) {
        const kk = Tk.normalized[Lk.kind];
        void 0 !== kk && (Lk.normalized = kk)
      }
      return ik
    }
    const nk = new WeakMap;

    function Gk(kk, Fk) {
      var Ik;
      const Xk = null !== (Ik = nk.get(kk)) && void 0 !== Ik ? Ik : Fk(kk);
      return nk.set(kk, Xk), Xk
    }

    function pk(kk) {
      const Fk = kk.bufferView,
        Ik = 5125 === kk.componentType ? Uint32Array : Uint16Array,
        Xk = Fk.bytes.buffer,
        Tk = Fk.bytes.byteOffset + (kk.byteOffset || 0);
      return Tk % Ik.BYTES_PER_ELEMENT !== 0 ? new Ik(Xk.slice(Tk, Tk + kk.count * Ik.BYTES_PER_ELEMENT), 0) : new Ik(Xk, Tk, kk.count)
    }

    function uk(kk, Fk) {
      if (kk.min && kk.max) return [new Float64Array(kk.min), new Float64Array(kk.max)];
      const Ik = Fk.find((kk => {
          let {
            kind: Fk
          } = kk;
          return "position" === Fk
        })),
        Xk = Ik ? (0, Vk.i)(Ik, kk.count) : new Float32Array(0);
      return (0, Vk.t)(Xk.length / 3, ((kk, Fk) => Xk[3 * kk + Fk]))
    }

    function bk(kk) {
      const Fk = kk.attributes.map((kk => {
          var Fk, Ik;
          let {
            kind: Xk,
            accessor: Tk
          } = kk;
          const {
            bufferView: ik,
            numComponents: yk
          } = Tk;
          if (!ik) {
            return {
              kind: Xk,
              data: Gk(Tk, (() => new Float32Array(yk * Tk.count))),
              offset: 0,
              stride: 4 * yk,
              components: yk,
              glType: 5126,
              isNormalized: !1
            }
          }
          const lk = null !== (Fk = ik.byteStride) && void 0 !== Fk ? Fk : yk * zk.d[Tk.componentType];
          return {
            kind: Xk,
            data: ik.bytes,
            offset: null !== (Ik = Tk.byteOffset) && void 0 !== Ik ? Ik : 0,
            stride: lk,
            components: yk,
            glType: Tk.componentType,
            isNormalized: Tk.normalized
          }
        })),
        Ik = kk.indices,
        Xk = Ik && Gk(Ik, pk),
        Tk = kk.position;
      return new Vk.h(Fk, Xk, Tk.count, ...uk(Tk, Fk))
    }
    const Rk = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Uk(kk, Fk) {
      const Ik = Fk.attributes.map((kk => {
        let {
          kind: Fk,
          data: Ik,
          size: Xk,
          byteOffset: Tk,
          byteStride: ik,
          normalized: yk
        } = kk;
        return {
          kind: Fk,
          data: Ik,
          offset: Tk,
          stride: ik,
          components: Xk,
          glType: 5120 + Rk.indexOf(Ik.constructor),
          isNormalized: yk
        }
      }));
      return new Vk.h(Ik, Fk.indices, Fk.totalVertices, ...uk(kk.position, Ik))
    }

    function Ck(kk) {
      const Fk = kk.lastIndexOf("/");
      return Fk < 0 ? kk : kk.substring(Fk + 1)
    }

    function Nk(kk) {
      const Fk = kk.lastIndexOf("/");
      return Fk < 0 ? "" : kk.substring(0, Fk + 1)
    }

    function ck(kk) {
      return kk.name || `node${kk.index}`
    }
    const Wk = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      fk = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Bk = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function dk(kk) {
      var Fk, Ik, Xk, Tk;
      const ik = null !== (Fk = kk.minFilter) && void 0 !== Fk ? Fk : 9987;
      return 9729 === (null !== (Ik = kk.magFilter) && void 0 !== Ik ? Ik : 9729) ? null !== (Xk = fk[ik]) && void 0 !== Xk ? Xk : 3 : null !== (Tk = Bk[ik]) && void 0 !== Tk ? Tk : 4
    }
    const Yk = {
      33071: 0,
      33648: 2
    };

    function Ak(kk) {
      var Fk;
      return null !== (Fk = Yk[null !== kk && void 0 !== kk ? kk : 10497]) && void 0 !== Fk ? Fk : 1
    }

    function gk(kk) {
      return 9728 === kk.minFilter || 9729 === kk.minFilter
    }

    function mk(kk) {
      var Fk, Ik, Xk;
      const Tk = Float64Array.from(null !== (Fk = kk.scale) && void 0 !== Fk ? Fk : [1, 1, 1]);
      return kk.hasCamera && (Tk[0] = -1), {
        translation: Float64Array.from(null !== (Ik = kk.translation) && void 0 !== Ik ? Ik : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Xk = kk.rotation) && void 0 !== Xk ? Xk : [0, 0, 0, 1]),
        scale: Tk
      }
    }

    function hk(kk, Fk) {
      let {
        translation: Ik,
        rotation: Xk,
        scale: Tk
      } = kk;
      const ik = new Float32Array(16);
      return (0, sk.b)(Tk, 0, Xk, 0, Ik, 0, ik), Fk && (0, sk.l)(ik, Fk, 0, ik), ik
    }
    class rk {
      constructor(kk, Fk, Ik, Xk) {
        this.model = kk, this.decode = Fk, this.fileInfo = Ik, this.uniqueRootUrl = Xk, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Tk = new Set,
          ik = (Fk, Ik) => {
            const Xk = kk.nodes[Fk];
            if (this.parents.has(Xk)) throw new zk.l(`/nodes/${Fk}: Invalid recursive node hierarchy`);
            this.parents.set(Xk, Ik);
            const yk = null === Xk.mesh ? [] : kk.meshes[Xk.mesh].primitives,
              lk = yk.map((kk => {
                const Fk = yk.length > 1;
                return {
                  name: Fk ? `${ck(Xk)}_primitive${kk.index}` : ck(Xk),
                  node: Xk,
                  primitive: kk,
                  part: Fk,
                  geometry: null
                }
              }));
            this.uses.set(Xk, lk);
            const ak = null !== Xk.mesh && Tk.has(Xk.mesh);
            Tk.add(Xk.mesh), this.own.set(Xk, ak ? [] : lk);
            for (const kk of Xk.children) ik(kk, Xk)
          };
        for (const yk of kk.rootNodes) ik(yk, null);
        this.primitives = kk.nodes.flatMap((kk => {
          var Fk;
          return null !== (Fk = this.own.get(kk)) && void 0 !== Fk ? Fk : []
        }))
      }
      decodeGeometries() {
        const kk = new Map;
        return Promise.all(this.primitives.map((async Fk => {
          const {
            primitive: Ik
          } = Fk, Xk = Ik.draco;
          let Tk = Xk ? kk.get(Xk.bufferView.index) : Promise.resolve(bk(Ik));
          Tk || (Tk = Ok(Ik, this.decode).then((kk => Uk(Ik, kk))), kk.set(Xk.bufferView.index, Tk)), Fk.geometry = await Tk
        })))
      }
      parentOf(kk) {
        var Fk;
        return null !== (Fk = this.parents.get(kk)) && void 0 !== Fk ? Fk : null
      }
      meshesUnder(kk) {
        const Fk = this.model.nodes.filter((kk => this.uses.has(kk)));
        for (const Xk of Fk) {
          const Fk = this.uses.get(Xk),
            Ik = Fk.find((Fk => Fk.name === kk));
          if (Ik) return 1 === Fk.length ? this.subtree(Xk) : this.own.get(Xk).includes(Ik) ? [Ik] : []
        }
        const Ik = Fk.find((Fk => 1 !== this.uses.get(Fk).length && ck(Fk) === kk));
        return Ik ? this.subtree(Ik) : null
      }
      subtree(kk) {
        return [...this.own.get(kk), ...kk.children.flatMap((kk => this.subtree(this.model.nodes[kk])))]
      }
      worldMatrix(kk, Fk, Ik) {
        let Xk = hk(mk(Fk ? Wk : {}), null);
        const Tk = [];
        for (let yk = kk.part ? kk.node : this.parentOf(kk.node); yk; yk = this.parentOf(yk)) Tk.unshift(yk);
        for (const yk of Tk) Xk = hk(mk(yk), Xk);
        const ik = mk(kk.part ? {} : kk.node);
        return void 0 !== Ik && ik.scale.fill(Ik), hk(ik, Xk)
      }
      floats(kk) {
        const {
          vertexAttributes: Fk,
          vertexCount: Ik
        } = kk.geometry;
        return new Map(Fk.map((kk => [kk.kind, (0, Vk.i)(kk, Ik)])))
      }
      imageUrl(kk) {
        return function(kk, Fk, Ik) {
          let {
            name: Xk
          } = Fk;
          return `data:${kk}${Xk}#image${Ik}`
        }(this.uniqueRootUrl, this.fileInfo, kk)
      }
      textureDesc(kk, Fk) {
        var Ik;
        let {
          texture: Xk,
          transform: Tk
        } = kk;
        const {
          sampler: ik,
          image: yk
        } = this.model.textures[Xk], {
          bufferView: lk,
          mimeType: ak,
          name: qk
        } = this.model.images[yk], Lk = Tk && {
          ...Tk.offset ? {
            uOffset: Tk.offset[0],
            vOffset: Tk.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Tk.rotation ? {
            wAng: -Tk.rotation
          } : {},
          ...Tk.scale ? {
            uScale: Tk.scale[0],
            vScale: Tk.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(yk),
          noMipmap: gk(ik),
          invertY: !1,
          samplingMode: dk(ik),
          data: {
            bytes: lk.bytes,
            mimeType: ak,
            label: qk,
            context: `/textures/${Xk}`
          },
          sets: {
            wrapU: Ak(ik.wrapS),
            wrapV: Ak(ik.wrapT),
            ...Lk,
            coordinatesIndex: null !== (Ik = null === Tk || void 0 === Tk ? void 0 : Tk.texCoord) && void 0 !== Ik ? Ik : 0,
            hasAlpha: Fk
          }
        }
      }
    }
    async function Dk(kk, Fk, Ik, Xk, Tk, ik) {
      let yk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const lk = function(kk, Fk, Ik) {
          return "string" !== typeof Fk ? {
            url: "",
            rootUrl: kk,
            name: Ik()
          } : Fk ? Fk.startsWith("data:") ? {
            url: Fk,
            rootUrl: kk,
            name: ""
          } : kk ? {
            url: kk + Fk,
            rootUrl: kk,
            name: Fk
          } : {
            url: Fk,
            rootUrl: Nk(Fk),
            name: Ck(Fk)
          } : {
            url: kk,
            rootUrl: Nk(kk),
            name: Ck(kk)
          }
        }(Ik, kk, Tk),
        ak = {};
      Fk.addPendingData(ak);
      try {
        const Ik = Ek(await async function(kk, Fk) {
            return "string" !== typeof Fk ? Fk : kk.url.startsWith("data:") ? (0, zk.p)(kk.url) : await (0, zk.r)(kk.url)
          }(lk, kk)),
          ak = new rk(Ik, Xk, lk, function(kk, Fk) {
            let {
              rootUrl: Ik,
              name: Xk
            } = kk;
            return !Ik.startsWith("file:") && Xk ? Ik : `${Ik}${Fk()}/`
          }(lk, Tk));
        return await ik(ak), Fk.importedMeshesFiles && (Fk.loadingPluginName = "vG", yk && Fk.importedMeshesFiles.push(lk.url)), ak
      } finally {
        Fk.removePendingData(ak)
      }
    }
    var Mk = Ik(37623),
      kF = Ik(37479),
      FF = Ik(37884);

    function IF(kk) {
      if (null === kk || void 0 === kk || !kk.min || !kk.max) return null;
      const [Fk, Ik, Xk] = kk.min, [Tk, ik, yk] = kk.max, {
        BoundingInfo: lk,
        Ge: ak
      } = (0, Mk.b)();
      return new lk(new ak(Fk, Ik, Xk), new ak(Tk, ik, yk))
    }

    function XF(kk) {
      (0, kF.i)(kk) || (kk.geometry && kk.geometry.useBoundingInfoFromGeometry ? kk._updateBoundingInfo() : kk.refreshBoundingInfo(!0, !0))
    }
    class TF {
      constructor(kk, Fk) {
        this.Yw = kk, this.decode = Fk, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(kk) {
        let Fk = this.viewData.get(kk.index);
        return Fk || (Fk = this.bufferData.then((() => kk.bytes)), this.viewData.set(kk.index, Fk)), Fk
      }
      viewBuffer(kk) {
        let Fk = this.viewBuffers.get(kk.index);
        return Fk || (Fk = this.viewBytes(kk).then((kk => new((0, Mk.b)().je)(this.Yw.Oe(), kk, !1))), this.viewBuffers.set(kk.index, Fk)), Fk
      }
      vertexBuffer(kk, Fk) {
        const {
          kind: Ik,
          data: Xk
        } = Fk, Tk = `${kk.index}:${Ik}`;
        let ik = this.vertexBuffers.get(Tk);
        if (!ik) {
          const yk = kk.bufferView;
          ik = yk ? this.viewBuffer(yk).then((kk => this.layoutVertexBuffer(kk, Fk))) : Promise.resolve(Xk).then((kk => new((0, Mk.b)().VertexBuffer)(this.Yw.Oe(), kk, Ik, !1))), this.vertexBuffers.set(Tk, ik)
        }
        return ik
      }
      layoutVertexBuffer(kk, Fk) {
        let {
          kind: Ik,
          offset: Xk,
          stride: Tk,
          components: ik,
          glType: yk,
          isNormalized: lk
        } = Fk;
        const ak = this.Yw.Oe();
        return new((0, Mk.b)().VertexBuffer)(ak, kk, Ik, !1, void 0, Tk, void 0, Xk, ik, yk, lk, !0, void 0, !0)
      }
      load(kk, Fk, Ik) {
        const Xk = (0, kF.i)(Ik),
          Tk = kk => {
            Xk || (Ik._delayInfo = Ik._delayInfo || [], -1 === Ik._delayInfo.indexOf(kk) && Ik._delayInfo.push(kk))
          },
          ik = Fk.draco;
        if (ik) {
          for (const kk in ik.attributeIds) Tk(kk);
          let yk = this.dracoGeometry.get(ik.bufferView.index);
          return yk || (yk = this.viewBytes(ik.bufferView).then((async () => {
            let Tk;
            try {
              Tk = await Ok(Fk, this.decode)
            } catch (ak) {
              throw new zk.l(`${kk}: ${ak instanceof Error?ak.message:String(ak)}`)
            }
            const ik = Uk(Fk, Tk);
            if (Xk) return ik;
            const yk = IF(Fk.position),
              lk = new((0, Mk.b)().MirroredGeometry)(Ik.name, this.Yw);
            yk && (lk._boundingInfo = yk, lk.useBoundingInfoFromGeometry = !0), ik.indexData && lk.setIndices(ik.indexData);
            for (const kk of ik.vertexAttributes) lk.setVerticesBuffer(this.layoutVertexBuffer(kk.data, kk), ik.vertexCount);
            return lk.link(ik), lk
          })), this.dracoGeometry.set(ik.bufferView.index, yk)), yk
        }
        const yk = [],
          lk = bk(Fk);
        if (Xk) return Ik.isUnIndexed = !lk.indexData, Ik.hasVertexAlpha = (0, FF.f)(Fk), Promise.resolve(lk);
        const ak = new((0, Mk.b)().MirroredGeometry)(Ik.name, this.Yw),
          {
            indexData: qk
          } = lk;
        qk ? yk.push(this.viewBytes(Fk.indices.bufferView).then((() => {
          ak.setIndices(qk)
        }))) : Ik.isUnIndexed = !0;
        for (const [Lk, {
            kind: tk,
            accessor: Zk
          }] of Fk.attributes.entries()) Tk(tk), yk.push(this.vertexBuffer(Zk, lk.vertexAttributes[Lk]).then((kk => {
          if ("position" === kk.getKind()) {
            const kk = IF(Zk);
            kk && (ak._boundingInfo = kk, ak.useBoundingInfoFromGeometry = !0)
          }
          ak.setVerticesBuffer(kk, lk.vertexCount)
        })));
        return (0, FF.f)(Fk) && (Ik.hasVertexAlpha = !0), Promise.all(yk).then((() => (ak.link(lk), ak)))
      }
    }
    var iF, yF = Ik(37381),
      lF = Ik(37144),
      aF = Ik(37896),
      qF = Ik(37324),
      LF = Ik(37365),
      tF = Ik(2700),
      ZF = Ik(37352);

    function jF(kk, Fk) {
      kk.metadata = kk.metadata || {};
      const Ik = kk._internalMetadata = kk._internalMetadata || {},
        Xk = Ik.vG = Ik.vG || {};
      (Xk.pointers = Xk.pointers || []).push(Fk)
    }

    function eF(kk, Fk) {
      if (Fk && Object.keys(Fk).length > 0) {
        const Ik = kk.metadata = kk.metadata || {};
        (Ik.vG = Ik.vG || {}).extras = Fk
      }
    }

    function wF(kk, Fk) {
      Fk.position = kk.translation ? lF.Ge.FromArray(kk.translation) : lF.Ge.Zero(), Fk.rotationQuaternion = kk.rotation ? lF.Quaternion.FromArray(kk.rotation) : lF.Quaternion.Identity(), Fk.ci = kk.scale ? lF.Ge.FromArray(kk.scale) : lF.Ge.One()
    }
    class HF {
      constructor(kk, Fk) {
        if (this.Yw = kk, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Fk) {
          const Fk = kk.Oe(),
            Ik = kk.hG.add((() => {
              this.dispose()
            })),
            Xk = Fk.Ee.add((() => {
              for (const kk of [...this.geometries, ...this.meshes, ...this.textures]) kk._rebuild()
            }));
          this.release = () => {
            kk.hG.remove(Ik), Fk.Ee.remove(Xk)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const kk of this.meshes) this.Yw.lXk(kk);
          for (const kk of this.materials) this.Yw.addMaterial(kk);
          for (const kk of this.geometries) this.Yw.addGeometry(kk);
          for (const kk of this.transformNodes) this.Yw.addTransformNode(kk);
          for (const kk of this.textures) this.Yw.addTexture(kk)
        }
      }
      dispose() {
        var kk;
        for (const Fk of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const kk of Fk.slice()) kk.dispose();
          Fk.length = 0
        }
        null === (kk = this.release) || void 0 === kk || kk.call(this), this.release = null
      }
    }
    class JF {
      constructor(kk, Fk, Ik, Xk, Tk, ik, yk) {
        this.asset = kk, this.Yw = Fk, this.tree = Ik, this.geometryData = Tk, this.materials = ik, this.lite = yk, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Xk ? Ik : null
      }
      create(kk) {
        if (this.lite) return kk();
        const Fk = this.Yw;
        Fk._blockEntityCollection = !!this.container;
        try {
          const Fk = kk();
          return this.container && (Fk._parentContainer = this.container), Fk
        } finally {
          Fk._blockEntityCollection = !1
        }
      }
      node(kk, Fk) {
        return this.create((() => this.lite ? Fk ? (0, aF.c)(this.lite, kk) : (0, aF.n)(this.lite, kk) : Fk ? new((0, Mk.b)().Mesh)(kk, this.Yw) : new((0, Mk.b)().TransformNode)(kk, this.Yw)))
      }
      async load() {
        var kk;
        this.asset.model.json.nodes && this.createRoot();
        const Fk = this.lite ? null : this.Yw,
          Ik = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.blockMaterialDirtyMechanism) && void 0 !== kk && kk;
        let Xk;
        Fk && (Fk.blockMaterialDirtyMechanism = !0);
        try {
          Xk = this.loadScene()
        } finally {
          null === Fk || void 0 === Fk || Fk._forceBlockMaterialDirtyMechanism(Ik)
        }
        await Xk;
        const {
          root: Tk,
          tree: ik
        } = this;
        Tk && (Tk.Av(!0), ik.meshes.push(Tk), ik.rootNodes.push(Tk));
        for (const lk of this.asset.model.nodes) {
          const kk = this.nodeObjects.get(lk.index);
          kk && ["TransformNode", "LiteNode"].includes(kk.getClassName()) && ik.transformNodes.push(kk);
          for (const Fk of null !== (yk = this.nodePrimitives.get(lk.index)) && void 0 !== yk ? yk : []) {
            var yk;
            ik.meshes.push(Fk);
            const kk = Fk.geometry;
            kk && !ik.geometries.includes(kk) && ik.geometries.push(kk)
          }
        }
      }
      createRoot() {
        const kk = this.node("__root__", !0);
        this.root = kk, kk.Av(!1), this.Yw.useRightHandedSystem || wF(Wk, kk)
      }
      loadScene() {
        const kk = [];
        for (const Fk of this.asset.model.rootNodes) kk.push(this.loadNode(this.asset.model.nodes[Fk], (kk => {
          kk.parent = this.root
        })));
        return kk.push(Promise.resolve()), Promise.all(kk).then((() => {}))
      }
      loadNode(kk, Fk) {
        const Ik = `/nodes/${kk.index}`,
          Xk = [],
          Tk = Tk => {
            if (jF(Tk, Ik), wF(kk, Tk), kk.hasCamera && !this.Yw.useRightHandedSystem) {
              const {
                ci: kk
              } = Tk;
              kk.set(-1, kk.y, kk.z)
            }
            for (const Fk of kk.children) Xk.push(this.loadNode(this.asset.model.nodes[Fk], (kk => {
              kk.parent = Tk
            })));
            (Ik => {
              eF(Ik, kk.extras), Fk(Ik)
            })(Tk)
          };
        if (null === kk.mesh) {
          const Fk = this.node(ck(kk), !1);
          this.nodeObjects.set(kk.index, Fk), Tk(Fk)
        } else {
          const Fk = this.asset.model.meshes[kk.mesh];
          Xk.push(this.loadMesh(`/meshes/${Fk.index}`, kk, Fk, Tk))
        }
        return Promise.all(Xk).then((() => {
          for (const Ik of null !== (Fk = this.nodePrimitives.get(kk.index)) && void 0 !== Fk ? Fk : []) {
            var Fk;
            XF(Ik)
          }
          return this.nodeObjects.get(kk.index)
        }))
      }
      loadMesh(kk, Fk, Ik, Xk) {
        const Tk = [],
          ik = ck(Fk);
        if (1 === Ik.primitives.length) {
          const Xk = Ik.primitives[0];
          Tk.push(this.loadPrimitive(`${kk}/primitives/${Xk.index}`, ik, Xk, (kk => {
            this.nodeObjects.set(Fk.index, kk), this.nodePrimitives.set(Fk.index, [kk])
          })))
        } else {
          const Xk = this.node(ik, !1);
          this.nodeObjects.set(Fk.index, Xk);
          const yk = [];
          this.nodePrimitives.set(Fk.index, yk);
          for (const Fk of Ik.primitives) Tk.push(this.loadPrimitive(`${kk}/primitives/${Fk.index}`, `${ik}_primitive${Fk.index}`, Fk, (kk => {
            kk.parent = Xk, yk.push(kk)
          })))
        }
        const yk = this.nodeObjects.get(Fk.index);
        return Xk(yk), Promise.all(Tk).then((() => yk))
      }
      loadPrimitive(kk, Fk, Ik, Xk) {
        const Tk = [],
          ik = this.node(Fk, !0);
        if (ik.sideOrientation = this.Yw.useRightHandedSystem ? qF.d.CounterClockWiseSideOrientation : qF.d.ClockWiseSideOrientation, Tk.push(this.geometryData.load(kk, Ik, ik).then((kk => {
            if ((0, kF.i)(ik)) {
              var Fk, Ik;
              const Xk = kk;
              ik.replaceModel(Xk, Int32Array.of(0, null !== (Fk = null === (Ik = Xk.indexData) || void 0 === Ik ? void 0 : Ik.length) && void 0 !== Fk ? Fk : Xk.vertexCount, 0, Xk.vertexCount))
            } else this.create((() => (kk.applyToMesh(ik), kk)))
          }))), this.materials) {
          const kk = 0 === Ik.mode ? qF.d.PointListDrawMode : qF.d.TriangleFillMode,
            Fk = null === Ik.material ? null : this.asset.model.materials[Ik.material];
          Tk.push(this.loadMaterial(Fk, kk, (kk => {
            ik.material = kk
          })))
        }
        return jF(ik, kk), Xk(ik), Promise.all(Tk).then((() => ik))
      }
      loadMaterial(kk, Fk, Ik) {
        var Xk;
        const Tk = `${null!==(Xk=null===kk||void 0===kk?void 0:kk.index)&&void 0!==Xk?Xk:"default"}:${Fk}`;
        let ik = this.materialData.get(Tk);
        return ik || (ik = this.createMaterial(kk, Fk), this.materialData.set(Tk, ik)), Ik(ik.material), ik.promise
      }
      createMaterial(kk, Fk) {
        const Ik = kk ? kk.name || `material${kk.index}` : "__GLTFLoader._default",
          {
            style: Xk,
            unlit: Tk
          } = this.materials;
        let ik;
        const yk = this.create((() => {
          const yk = (0, ZF.e)({
            name: Ik,
            Yw: this.Yw,
            sets: {
              ...(0, FF.d)(this.asset, kk, Xk, Tk),
              fillMode: Fk
            },
            unrendered: !0
          });
          return ik = yk.model, yk.mirror
        }));
        let lk = Promise.resolve();
        if (kk) {
          const Fk = `/materials/${kk.index}`,
            Xk = ik.diffuseTexture;
          if (Xk && !Xk.mirror) lk = new Promise((kk => setTimeout(kk)));
          else if (Xk) {
            const Tk = Xk.mirror;
            Tk._parentContainer = this.container, Tk.name = `${Ik} (Base Color)`, jF(Tk, `${Fk}${kk.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Tk), lk = (0, LF.t)(Xk)
          }
          eF(yk, kk.extras), jF(yk, Fk)
        }
        return this.tree.materials.push(yk), {
          material: yk,
          promise: lk
        }
      }
    }

    function xF() {
      yF.h.dracoDecodes = wk.decodes, yF.h.dracoWorkersStarted = wk.workersStarted, yF.h.dracoMostWorkers = wk.mostWorkers
    }
    async function PF(kk, Fk, Ik, Tk, ik) {
      try {
        return await async function(kk, Fk, Ik, Tk, ik, yk) {
          var lk;
          let ak;
          const qk = null === (lk = (0, tF.e)()) || void 0 === lk ? void 0 : lk.Xw,
            Lk = null !== qk && void 0 !== qk && qk.Tw && Fk === qk.mG() ? qk : null,
            tk = ik && !Lk;
          return await Dk(kk, Fk, Ik, Tk, Xk.e, (kk => (ak = new HF(Fk, tk), new JF(kk, Fk, ak, tk, new TF(Fk, Tk), yk, Lk).load())), !ik), ak
        }(kk, Fk, Ik, Qk, Tk, ik)
      } finally {
        xF()
      }
    }
    async function KF(kk, Fk, Ik, Tk) {
      try {
        return await Dk(kk, Fk, Ik, Qk, Xk.e, (kk => Tk(kk, new TF(Fk, Qk))))
      } finally {
        xF()
      }
    }
    iF = Tk.d, Lk || (Lk = {
      scriptUrl: new URL(iF.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(iF.wasmBinaryUrl, location.href).href
    })
  },
  41499: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(129),
      Tk = Ik(1078);

    function ik(kk) {
      return (0, Xk.e)() ? `https://${Tk.e.discordDomain}/${kk.href}` : kk.href
    }
    const yk = {
      scriptUrl: ik(new Ik.U(Ik(41502))),
      wasmBinaryUrl: ik(new Ik.U(Ik(41511)))
    }
  },
  36217: kk => {
    kk.exports = function(kk, Fk, Ik, Xk) {
      var Tk = self || window;
      try {
        try {
          var ik;
          try {
            ik = new Tk.Blob([kk])
          } catch (qk) {
            (ik = new(Tk.BlobBuilder || Tk.WebKitBlobBuilder || Tk.MozBlobBuilder || Tk.MSBlobBuilder)).append(kk), ik = ik.getBlob()
          }
          var yk = Tk.URL || Tk.webkitURL,
            lk = yk.createObjectURL(ik),
            ak = new Tk[Fk](lk, Ik);
          return yk.revokeObjectURL(lk), ak
        } catch (qk) {
          return new Tk[Fk]("data:application/javascript,".concat(encodeURIComponent(kk)), Ik)
        }
      } catch (qk) {
        if (!Xk) throw Error("Inline worker is not supported");
        return new Tk[Fk](Xk, Ik)
      }
    }
  },
  41502: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41511: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
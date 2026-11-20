export const id = 203;
export const ids = [203];
export const modules = {
  40922: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      loadGlbAsset: () => iF,
      loadGlbTree: () => vF
    });
    var Rk = Bk(37578),
      tk = Bk(40931),
      ak = Bk(35991),
      Xk = Bk.n(ak);

    function bk() {
      return Xk()('(()=>{class kk extends Error{}function Fk(Fk,Bk){const Rk=Fk._malloc(Bk);if(0===Rk)throw new kk(`Draco: the decoder\'s heap refused ${Bk} bytes`);return Rk}function Bk(kk){return{[kk.DT_FLOAT32]:[Float32Array,5126],[kk.DT_INT8]:[Int8Array,5120],[kk.DT_INT16]:[Int16Array,5122],[kk.DT_INT32]:[Int32Array,5124],[kk.DT_UINT8]:[Uint8Array,5121],[kk.DT_UINT16]:[Uint16Array,5123],[kk.DT_UINT32]:[Uint32Array,5125]}}function Rk(Fk,Rk,tk,ak,Xk){let bk=null,wk=null,dk=null;try{bk=new Fk.Decoder,wk=new Fk.DecoderBuffer,wk.Init(Rk,Rk.byteLength);let sk=0;const Vk=bk.GetEncodedGeometryType(wk);if(Vk===Fk.TRIANGULAR_MESH){const Bk=new Fk.Mesh;dk=Bk;const Rk=bk.DecodeBufferToMesh(wk,Bk);if(!Rk.ok()||0===Bk.ptr)throw new kk(Rk.error_msg());sk=3*Bk.num_faces()}else{if(Vk!==Fk.POINT_CLOUD)throw new kk(`Draco: Cannot decode invalid geometry type ${Vk}`);{const Bk=new Fk.PointCloud;dk=Bk;const Rk=bk.DecodeBufferToPointCloud(wk,Bk);if(!Rk.ok()||!Bk.ptr)throw new kk(Rk.error_msg())}}const Jk=dk.num_points();if(Jk!==ak.vertices||sk!==ak.indices)throw new kk(`Draco: decoded ${Jk} vertices and ${sk} indices, the accessors declare ${ak.vertices} and ${ak.indices}`);const Ak=Bk(Fk),ek=[];for(const{kind:Fk,id:Bk,components:Rk}of tk){const tk=bk.GetAttributeByUniqueId(dk,Bk);if(!tk||0===tk.ptr)throw new kk(`Draco: no attribute with id ${Bk} (${Fk})`);const ak=tk.data_type();if(!Ak[ak])throw new kk(`Draco: Cannot decode invalid data type ${ak}`);if(tk.num_components()!==Rk)throw new kk(`Draco: ${Fk} decodes to ${tk.num_components()} components, its accessor declares ${Rk}`);ek.push([Fk,tk,ak])}return Xk({dracoDecoder:bk,geometry:dk,triangles:Vk===Fk.TRIANGULAR_MESH,numPoints:Jk,numIndices:sk,attributes:ek})}finally{dk&&Fk.destroy(dk),wk&&Fk.destroy(wk),bk&&Fk.destroy(bk)}}const tk=self;let ak=null;self.onmessage=kk=>{let{data:Xk}=kk;if("init"===Xk.id){try{importScripts(Xk.url),ak=DracoDecoderModule({wasmBinary:Xk.wasmBinary}),tk.postMessage({id:"initDone"})}catch(Vk){tk.postMessage({id:"initError",message:Vk instanceof Error?Vk.message:String(Vk)})}return}const{seq:bk,data:wk,attributeIds:dk,expected:sk}=Xk;ak?ak.then((kk=>{try{const ak=function(kk,tk,ak,Xk){const bk=Object.keys(ak).map((kk=>({kind:kk,id:ak[kk],components:Xk.components[kk]})));return Rk(kk,tk,bk,Xk,(Rk=>{let{dracoDecoder:tk,geometry:ak,triangles:Xk,numPoints:bk,numIndices:wk,attributes:dk}=Rk;const sk=Bk(kk);let Vk=null;if(Xk){const Bk=4*wk,Rk=Fk(kk,Bk);try{tk.GetTrianglesUInt32Array(ak,Bk,Rk),Vk=new Uint32Array(wk),Vk.set(new Uint32Array(kk.HEAPF32.buffer,Rk,wk))}finally{kk._free(Rk)}}const Jk=[];for(const[Bk,Ak,ek]of dk){const[Rk]=sk[ek],Xk=Ak.num_components(),wk=bk*Xk,dk=wk*Rk.BYTES_PER_ELEMENT,Vk=Fk(kk,dk);try{tk.GetAttributeDataArrayForAllPoints(ak,Ak,ek,dk,Vk),Jk.push({kind:Bk,data:new Rk(kk.HEAPF32.buffer,Vk,wk).slice(),size:Xk,byteOffset:Ak.byte_offset(),byteStride:Ak.byte_stride(),normalized:Ak.normalized()})}finally{kk._free(Vk)}}return{indices:Vk,attributes:Jk,totalVertices:bk}}))}(kk,wk,dk,sk),Xk=ak.attributes.map((kk=>kk.data.buffer));ak.indices&&Xk.push(ak.indices.buffer),tk.postMessage({id:"decoded",seq:bk,...ak},Xk)}catch(Vk){tk.postMessage({id:"decodeError",seq:bk,message:Vk instanceof Error?Vk.message:String(Vk)})}}),(kk=>{tk.postMessage({id:"decodeError",seq:bk,message:kk instanceof Error?kk.message:String(kk)})})):tk.postMessage({id:"decodeError",seq:bk,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, Bk.p + "dracoDecode.worker.63d5ab55.worker.js")
    }
    var wk = Bk(98);
    const dk = 1e3;
    let sk = null,
      Vk = null;
    const Jk = [],
      Ak = [];
    let ek = 0;
    const yk = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      fk = function(kk, Fk) {
        const Bk = kk ? Math.max(1, Math.min(Math.floor(.5 * kk), 4)) : 1;
        return Fk ? Math.min(Bk, 2) : Bk
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, wk.isMobile)());

    function mk() {
      if (!sk) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: kk,
        wasmBinaryUrl: Fk
      } = sk;
      return Vk ??= fetch(Fk).then((kk => {
        if (!kk.ok) throw new Error(`Draco: fetching ${Fk} failed: ${kk.status}`);
        return kk.arrayBuffer()
      })), Vk.catch((() => {
        Vk = null
      })), yk.workersStarted++, Vk.then((Fk => new Promise(((Bk, Rk) => {
        const tk = new bk;
        tk.onerror = kk => {
          tk.onmessage = null, tk.onerror = null, tk.terminate(), Rk(new Error("Draco: the decode worker failed to start" + (kk.message ? `: ${kk.message}` : " (its script did not load)")))
        }, tk.onmessage = kk => {
          let {
            data: Fk
          } = kk;
          tk.onmessage = null, tk.onerror = null, "initDone" === Fk.id ? Bk(tk) : (tk.terminate(), Rk(new Error(`Draco: ${"initError"===Fk.id?Fk.message:"the worker did not start"}`)))
        };
        const ak = Fk.slice(0),
          Xk = {
            id: "init",
            url: kk,
            wasmBinary: ak
          };
        tk.postMessage(Xk, [ak])
      }))))
    }

    function Wk(kk) {
      const Fk = Jk.indexOf(kk); - 1 !== Fk && Jk.splice(Fk, 1);
      const Bk = Ak.shift();
      Bk && ik(Bk)
    }

    function vk(kk, Fk) {
      kk.busy = !0, kk.releaseTimer && (clearTimeout(kk.releaseTimer), kk.releaseTimer = null);
      kk.worker.then((Bk => {
        const Rk = ek++;
        Bk.onmessage = tk => {
          let {
            data: ak
          } = tk;
          if (("decoded" === ak.id || "decodeError" === ak.id) && ak.seq === Rk) {
            if (Bk.onmessage = null, Bk.onerror = null, "decoded" === ak.id) return yk.decodes++, Fk.resolve({
              indices: ak.indices,
              attributes: ak.attributes,
              totalVertices: ak.totalVertices
            }), void(() => {
              const Fk = Ak.shift();
              Fk ? vk(kk, Fk) : (kk.busy = !1, kk.releaseTimer = setTimeout((() => {
                const Fk = Jk.indexOf(kk); - 1 !== Fk && Jk.splice(Fk, 1), kk.worker.then((kk => {
                  kk.terminate()
                }))
              }), dk))
            })();
            Bk.terminate(), Fk.reject(new Error(ak.message)), Wk(kk)
          }
        }, Bk.onerror = Rk => {
          Bk.onmessage = null, Bk.onerror = null, Bk.terminate(), Fk.reject(new Error(`Draco: the decode worker failed: ${Rk.message}`)), Wk(kk)
        };
        const tk = {
          id: "decode",
          seq: Rk,
          data: Fk.data,
          attributeIds: Fk.attributeIds,
          expected: Fk.expected
        };
        Bk.postMessage(tk, [Fk.data.buffer])
      }), (Bk => {
        Fk.reject(Bk instanceof Error ? Bk : new Error(String(Bk))), Wk(kk)
      }))
    }

    function ik(kk) {
      const Fk = Jk.find((kk => !kk.busy));
      if (Fk) vk(Fk, kk);
      else {
        if (Jk.length < fk) {
          const Fk = {
            worker: mk(),
            busy: !0,
            releaseTimer: null
          };
          return Jk.push(Fk), yk.mostWorkers = Math.max(yk.mostWorkers, Jk.length), void vk(Fk, kk)
        }
        Ak.push(kk)
      }
    }

    function Yk(kk, Fk, Bk) {
      return new Promise(((Rk, tk) => {
        ik({
          data: new Int8Array(kk.buffer, kk.byteOffset, kk.byteLength).slice(),
          attributeIds: Fk,
          expected: Bk,
          resolve: Rk,
          reject: tk
        })
      }))
    }
    var Lk = Bk(37116),
      Ok = Bk(37131),
      Ek = Bk(9079),
      Sk = Bk(9077);
    const Nk = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Hk(kk) {
      const Fk = (0, Sk.h)(kk.byteLength);
      if (Fk) throw new Ek.i(Fk);
      const {
        json: Bk,
        bin: Rk
      } = (0, Ek.u)(kk), tk = (0, Sk.f)(Bk, Rk);
      if (tk) throw new Ek.i(tk);
      try {
        return function(kk, Fk) {
          var Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk;
          const mk = new Map,
            Wk = Bk => {
              let Rk = mk.get(Bk);
              if (!Rk) {
                var tk;
                const ak = kk.bufferViews[Bk],
                  Xk = null !== (tk = ak.byteOffset) && void 0 !== tk ? tk : 0;
                Rk = {
                  index: Bk,
                  bytes: Fk.subarray(Xk, Xk + ak.byteLength),
                  byteStride: ak.byteStride
                }, mk.set(Bk, Rk)
              }
              return Rk
            },
            vk = new Map,
            ik = Fk => {
              let Bk = vk.get(Fk);
              if (!Bk) {
                var Rk;
                const tk = kk.accessors[Fk];
                Bk = {
                  index: Fk,
                  count: tk.count,
                  type: tk.type,
                  numComponents: Ek.k[tk.type],
                  componentType: tk.componentType,
                  normalized: null !== (Rk = tk.normalized) && void 0 !== Rk && Rk,
                  byteOffset: tk.byteOffset,
                  bufferView: void 0 === tk.bufferView ? null : Wk(tk.bufferView),
                  min: tk.min,
                  max: tk.max
                }, vk.set(Fk, Bk)
              }
              return Bk
            },
            Yk = null !== (Bk = null === (Rk = kk.extensionsUsed) || void 0 === Rk ? void 0 : Rk.includes("KHR_draco_mesh_compression")) && void 0 !== Bk && Bk,
            Lk = (null !== (tk = kk.meshes) && void 0 !== tk ? tk : []).map(((Fk, Bk) => {
              const Rk = Fk.primitives.map(((Fk, Bk) => {
                var Rk, tk, ak;
                const Xk = Yk ? null === (Rk = Fk.extensions) || void 0 === Rk ? void 0 : Rk.KHR_draco_mesh_compression : void 0;
                let bk = null;
                const wk = [];
                if (Xk) {
                  const Bk = {
                    vertices: kk.accessors[Fk.attributes.POSITION].count,
                    indices: void 0 === Fk.indices ? 0 : kk.accessors[Fk.indices].count,
                    components: {}
                  };
                  bk = {
                    bufferView: Wk(Xk.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: Bk
                  };
                  for (const [Rk, tk] of Ek.g) {
                    const ak = Xk.attributes[Rk];
                    if (void 0 === ak) continue;
                    bk.attributeIds[tk] = ak;
                    const wk = Fk.attributes[Rk];
                    var dk;
                    if (void 0 !== wk) bk.normalized[tk] = null !== (dk = kk.accessors[wk].normalized) && void 0 !== dk && dk, Bk.components[tk] = Ek.k[kk.accessors[wk].type]
                  }
                } else
                  for (const [kk, sk] of Ek.g) {
                    const Bk = Fk.attributes[kk];
                    void 0 !== Bk && wk.push({
                      semantic: kk,
                      kind: sk,
                      accessor: ik(Bk)
                    })
                  }
                return {
                  index: Bk,
                  mode: null !== (tk = Fk.mode) && void 0 !== tk ? tk : 4,
                  attributes: wk,
                  indices: Xk || void 0 === Fk.indices ? null : ik(Fk.indices),
                  position: void 0 === Fk.attributes.POSITION ? null : ik(Fk.attributes.POSITION),
                  material: null !== (ak = Fk.material) && void 0 !== ak ? ak : null,
                  draco: bk
                }
              }));
              return {
                index: Bk,
                name: Fk.name,
                primitives: Rk,
                extras: Fk.extras
              }
            })),
            Ok = (null !== (ak = kk.nodes) && void 0 !== ak ? ak : []).map(((kk, Fk) => {
              var Bk, Rk;
              return {
                index: Fk,
                name: kk.name,
                children: null !== (Bk = kk.children) && void 0 !== Bk ? Bk : [],
                mesh: null !== (Rk = kk.mesh) && void 0 !== Rk ? Rk : null,
                translation: kk.translation,
                rotation: kk.rotation,
                scale: kk.scale,
                hasCamera: void 0 !== kk.camera,
                extras: kk.extras
              }
            })),
            Sk = null !== (Xk = null === (bk = kk.extensionsUsed) || void 0 === bk ? void 0 : bk.includes("KHR_materials_unlit")) && void 0 !== Xk && Xk,
            Hk = null !== (wk = null === (dk = kk.extensionsUsed) || void 0 === dk ? void 0 : dk.includes("KHR_texture_transform")) && void 0 !== wk && wk,
            uk = (null !== (sk = kk.materials) && void 0 !== sk ? sk : []).map(((kk, Fk) => {
              var Bk, Rk, tk, ak;
              const Xk = kk.pbrMetallicRoughness,
                bk = null === Xk || void 0 === Xk ? void 0 : Xk.baseColorTexture;
              return {
                index: Fk,
                name: kk.name,
                extras: kk.extras,
                unlit: Sk && void 0 !== (null === (Bk = kk.extensions) || void 0 === Bk ? void 0 : Bk.KHR_materials_unlit),
                pbr: Xk ? {
                  baseColorFactor: Xk.baseColorFactor,
                  metallicFactor: Xk.metallicFactor,
                  roughnessFactor: Xk.roughnessFactor
                } : null,
                baseColorTexture: bk ? {
                  texture: bk.index,
                  transform: Hk && (null === (Rk = bk.extensions) || void 0 === Rk ? void 0 : Rk.KHR_texture_transform) || null
                } : null,
                emissiveFactor: kk.emissiveFactor,
                alphaMode: null !== (tk = kk.alphaMode) && void 0 !== tk ? tk : "OPAQUE",
                alphaCutoff: kk.alphaCutoff,
                doubleSided: null !== (ak = kk.doubleSided) && void 0 !== ak && ak
              }
            })),
            Mk = (null !== (Vk = kk.textures) && void 0 !== Vk ? Vk : []).map(((Fk, Bk) => {
              var Rk, tk;
              const ak = void 0 === Fk.sampler ? Nk : {
                index: Fk.sampler,
                ...null === (Rk = kk.samplers) || void 0 === Rk ? void 0 : Rk[Fk.sampler]
              };
              return {
                index: Bk,
                sampler: {
                  index: ak.index,
                  magFilter: ak.magFilter,
                  minFilter: ak.minFilter,
                  wrapS: ak.wrapS,
                  wrapT: ak.wrapT
                },
                image: null !== (tk = Fk.source) && void 0 !== tk ? tk : -1
              }
            })),
            gk = (null !== (Jk = kk.images) && void 0 !== Jk ? Jk : []).map(((kk, Fk) => ({
              index: Fk,
              name: kk.name,
              mimeType: kk.mimeType,
              bufferView: Wk(kk.bufferView)
            }))),
            Uk = null !== (Ak = (0, Ek.t)(kk)) && void 0 !== Ak ? Ak : 0;
          return {
            json: kk,
            rootNodes: null !== (ek = null === (yk = kk.scenes) || void 0 === yk || null === (fk = yk[Uk]) || void 0 === fk ? void 0 : fk.nodes) && void 0 !== ek ? ek : [],
            nodes: Ok,
            meshes: Lk,
            materials: uk,
            textures: Mk,
            images: gk
          }
        }(Bk, Rk)
      } catch (ak) {
        throw ak instanceof Ek.h ? ak : new Ek.h(`reading the GLB failed: ${ak instanceof Error?ak.message:String(ak)}`)
      }
    }
    async function uk(kk, Fk) {
      var Bk, Rk;
      const tk = kk.draco;
      if (!tk) throw new Ek.h("not a Draco primitive");
      let ak;
      try {
        ak = await Fk(tk.bufferView.bytes, tk.attributeIds, tk.expected)
      } catch (dk) {
        throw new Ek.h(`Draco decoding failed: ${dk instanceof Error?dk.message:String(dk)}`)
      }
      const {
        vertices: Xk,
        indices: bk,
        components: wk
      } = tk.expected;
      if (ak.totalVertices !== Xk || (null !== (Bk = null === (Rk = ak.indices) || void 0 === Rk ? void 0 : Rk.length) && void 0 !== Bk ? Bk : 0) !== bk || ak.attributes.some((kk => kk.size !== wk[kk.kind] || kk.data.length !== Xk * kk.size))) throw new Ek.h("Draco decoding gave other counts than the accessors declare");
      for (const sk of ak.attributes) {
        const kk = tk.normalized[sk.kind];
        void 0 !== kk && (sk.normalized = kk)
      }
      return ak
    }
    const Mk = new WeakMap;

    function gk(kk, Fk) {
      var Bk;
      const Rk = null !== (Bk = Mk.get(kk)) && void 0 !== Bk ? Bk : Fk(kk);
      return Mk.set(kk, Rk), Rk
    }

    function Uk(kk) {
      const Fk = kk.bufferView,
        Bk = 5125 === kk.componentType ? Uint32Array : Uint16Array,
        Rk = Fk.bytes.buffer,
        tk = Fk.bytes.byteOffset + (kk.byteOffset || 0);
      return tk % Bk.BYTES_PER_ELEMENT !== 0 ? new Bk(Rk.slice(tk, tk + kk.count * Bk.BYTES_PER_ELEMENT), 0) : new Bk(Rk, tk, kk.count)
    }

    function ck(kk, Fk) {
      if (kk.min && kk.max) return [new Float64Array(kk.min), new Float64Array(kk.max)];
      const Bk = Fk.find((kk => {
          let {
            kind: Fk
          } = kk;
          return "position" === Fk
        })),
        Rk = Bk ? (0, Ok.f)(Bk, kk.count) : new Float32Array(0);
      return (0, Ok.q)(Rk.length / 3, ((kk, Fk) => Rk[3 * kk + Fk]))
    }

    function Gk(kk) {
      const Fk = kk.attributes.map((kk => {
          var Fk, Bk;
          let {
            kind: Rk,
            accessor: tk
          } = kk;
          const {
            bufferView: ak,
            numComponents: Xk
          } = tk;
          if (!ak) {
            return {
              kind: Rk,
              data: gk(tk, (() => new Float32Array(Xk * tk.count))),
              offset: 0,
              stride: 4 * Xk,
              components: Xk,
              glType: 5126,
              isNormalized: !1
            }
          }
          const bk = null !== (Fk = ak.byteStride) && void 0 !== Fk ? Fk : Xk * Ek.c[tk.componentType];
          return {
            kind: Rk,
            data: ak.bytes,
            offset: null !== (Bk = tk.byteOffset) && void 0 !== Bk ? Bk : 0,
            stride: bk,
            components: Xk,
            glType: tk.componentType,
            isNormalized: tk.normalized
          }
        })),
        Bk = kk.indices,
        Rk = Bk && gk(Bk, Uk),
        tk = kk.position;
      return new Ok.d(Fk, Rk, tk.count, ...ck(tk, Fk))
    }
    const Tk = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function rk(kk, Fk) {
      const Bk = Fk.attributes.map((kk => {
        let {
          kind: Fk,
          data: Bk,
          size: Rk,
          byteOffset: tk,
          byteStride: ak,
          normalized: Xk
        } = kk;
        return {
          kind: Fk,
          data: Bk,
          offset: tk,
          stride: ak,
          components: Rk,
          glType: 5120 + Tk.indexOf(Bk.constructor),
          isNormalized: Xk
        }
      }));
      return new Ok.d(Bk, Fk.indices, Fk.totalVertices, ...ck(kk.position, Bk))
    }

    function Dk(kk) {
      const Fk = kk.lastIndexOf("/");
      return Fk < 0 ? kk : kk.substring(Fk + 1)
    }

    function zk(kk) {
      const Fk = kk.lastIndexOf("/");
      return Fk < 0 ? "" : kk.substring(0, Fk + 1)
    }

    function Pk(kk) {
      return kk.name || `node${kk.index}`
    }
    const hk = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      qk = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Ck = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Zk(kk) {
      var Fk, Bk, Rk, tk;
      const ak = null !== (Fk = kk.minFilter) && void 0 !== Fk ? Fk : 9987;
      return 9729 === (null !== (Bk = kk.magFilter) && void 0 !== Bk ? Bk : 9729) ? null !== (Rk = qk[ak]) && void 0 !== Rk ? Rk : 3 : null !== (tk = Ck[ak]) && void 0 !== tk ? tk : 4
    }
    const pk = {
      33071: 0,
      33648: 2
    };

    function Kk(kk) {
      var Fk;
      return null !== (Fk = pk[null !== kk && void 0 !== kk ? kk : 10497]) && void 0 !== Fk ? Fk : 1
    }

    function xk(kk) {
      return 9728 === kk.minFilter || 9729 === kk.minFilter
    }

    function jk(kk) {
      var Fk, Bk, Rk;
      const tk = Float64Array.from(null !== (Fk = kk.scale) && void 0 !== Fk ? Fk : [1, 1, 1]);
      return kk.hasCamera && (tk[0] = -1), {
        translation: Float64Array.from(null !== (Bk = kk.translation) && void 0 !== Bk ? Bk : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Rk = kk.rotation) && void 0 !== Rk ? Rk : [0, 0, 0, 1]),
        scale: tk
      }
    }

    function lk(kk, Fk) {
      let {
        translation: Bk,
        rotation: Rk,
        scale: tk
      } = kk;
      const ak = new Float32Array(16);
      return (0, Lk.d)(tk, 0, Rk, 0, Bk, 0, ak), Fk && (0, Lk.n)(ak, Fk, 0, ak), ak
    }
    class nk {
      constructor(kk, Fk, Bk, Rk) {
        this.model = kk, this.decode = Fk, this.fileInfo = Bk, this.uniqueRootUrl = Rk, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const tk = new Set,
          ak = (Fk, Bk) => {
            const Rk = kk.nodes[Fk];
            if (this.parents.has(Rk)) throw new Ek.h(`/nodes/${Fk}: Invalid recursive node hierarchy`);
            this.parents.set(Rk, Bk);
            const Xk = null === Rk.mesh ? [] : kk.meshes[Rk.mesh].primitives,
              bk = Xk.map((kk => {
                const Fk = Xk.length > 1;
                return {
                  name: Fk ? `${Pk(Rk)}_primitive${kk.index}` : Pk(Rk),
                  node: Rk,
                  primitive: kk,
                  part: Fk,
                  geometry: null
                }
              }));
            this.uses.set(Rk, bk);
            const wk = null !== Rk.mesh && tk.has(Rk.mesh);
            tk.add(Rk.mesh), this.own.set(Rk, wk ? [] : bk);
            for (const kk of Rk.children) ak(kk, Rk)
          };
        for (const Xk of kk.rootNodes) ak(Xk, null);
        this.primitives = kk.nodes.flatMap((kk => {
          var Fk;
          return null !== (Fk = this.own.get(kk)) && void 0 !== Fk ? Fk : []
        }))
      }
      decodeGeometries() {
        const kk = new Map;
        return Promise.all(this.primitives.map((async Fk => {
          const {
            primitive: Bk
          } = Fk, Rk = Bk.draco;
          let tk = Rk ? kk.get(Rk.bufferView.index) : Promise.resolve(Gk(Bk));
          tk || (tk = uk(Bk, this.decode).then((kk => rk(Bk, kk))), kk.set(Rk.bufferView.index, tk)), Fk.geometry = await tk
        })))
      }
      parentOf(kk) {
        var Fk;
        return null !== (Fk = this.parents.get(kk)) && void 0 !== Fk ? Fk : null
      }
      meshesUnder(kk) {
        const Fk = this.model.nodes.filter((kk => this.uses.has(kk)));
        for (const Rk of Fk) {
          const Fk = this.uses.get(Rk),
            Bk = Fk.find((Fk => Fk.name === kk));
          if (Bk) return 1 === Fk.length ? this.subtree(Rk) : this.own.get(Rk).includes(Bk) ? [Bk] : []
        }
        const Bk = Fk.find((Fk => 1 !== this.uses.get(Fk).length && Pk(Fk) === kk));
        return Bk ? this.subtree(Bk) : null
      }
      subtree(kk) {
        return [...this.own.get(kk), ...kk.children.flatMap((kk => this.subtree(this.model.nodes[kk])))]
      }
      worldMatrix(kk, Fk, Bk) {
        let Rk = lk(jk(Fk ? hk : {}), null);
        const tk = [];
        for (let Xk = kk.part ? kk.node : this.parentOf(kk.node); Xk; Xk = this.parentOf(Xk)) tk.unshift(Xk);
        for (const Xk of tk) Rk = lk(jk(Xk), Rk);
        const ak = jk(kk.part ? {} : kk.node);
        return void 0 !== Bk && ak.scale.fill(Bk), lk(ak, Rk)
      }
      floats(kk) {
        const {
          vertexAttributes: Fk,
          vertexCount: Bk
        } = kk.geometry;
        return new Map(Fk.map((kk => [kk.kind, (0, Ok.f)(kk, Bk)])))
      }
      imageUrl(kk) {
        return function(kk, Fk, Bk) {
          let {
            name: Rk
          } = Fk;
          return `data:${kk}${Rk}#image${Bk}`
        }(this.uniqueRootUrl, this.fileInfo, kk)
      }
      textureDesc(kk, Fk) {
        var Bk;
        let {
          texture: Rk,
          transform: tk
        } = kk;
        const {
          sampler: ak,
          image: Xk
        } = this.model.textures[Rk], {
          bufferView: bk,
          mimeType: wk,
          name: dk
        } = this.model.images[Xk], sk = tk && {
          ...tk.offset ? {
            uOffset: tk.offset[0],
            vOffset: tk.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...tk.rotation ? {
            wAng: -tk.rotation
          } : {},
          ...tk.scale ? {
            uScale: tk.scale[0],
            vScale: tk.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Xk),
          noMipmap: xk(ak),
          invertY: !1,
          samplingMode: Zk(ak),
          data: {
            bytes: bk.bytes,
            mimeType: wk,
            label: dk,
            context: `/textures/${Rk}`
          },
          sets: {
            wrapU: Kk(ak.wrapS),
            wrapV: Kk(ak.wrapT),
            ...sk,
            coordinatesIndex: null !== (Bk = null === tk || void 0 === tk ? void 0 : tk.texCoord) && void 0 !== Bk ? Bk : 0,
            hasAlpha: Fk
          }
        }
      }
    }
    async function Ik(kk, Fk, Bk, Rk, tk, ak) {
      let Xk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const bk = function(kk, Fk, Bk) {
          return "string" !== typeof Fk ? {
            url: "",
            rootUrl: kk,
            name: Bk()
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
            rootUrl: zk(Fk),
            name: Dk(Fk)
          } : {
            url: kk,
            rootUrl: zk(kk),
            name: Dk(kk)
          }
        }(Bk, kk, tk),
        wk = {};
      Fk.addPendingData(wk);
      try {
        const Bk = Hk(await async function(kk, Fk) {
            return "string" !== typeof Fk ? Fk : kk.url.startsWith("data:") ? (0, Ek.m)(kk.url) : await (0, Ek.p)(kk.url)
          }(bk, kk)),
          wk = new nk(Bk, Rk, bk, function(kk, Fk) {
            let {
              rootUrl: Bk,
              name: Rk
            } = kk;
            return !Bk.startsWith("file:") && Rk ? Bk : `${Bk}${Fk()}/`
          }(bk, tk));
        return await ak(wk), Fk.importedMeshesFiles && (Fk.loadingPluginName = "bS", Xk && Fk.importedMeshesFiles.push(bk.url)), wk
      } finally {
        Fk.removePendingData(wk)
      }
    }
    var Qk = Bk(37245),
      kF = Bk(37085),
      FF = Bk(37563);

    function BF(kk) {
      if (null === kk || void 0 === kk || !kk.min || !kk.max) return null;
      const [Fk, Bk, Rk] = kk.min, [tk, ak, Xk] = kk.max, {
        BoundingInfo: bk,
        Qe: wk
      } = (0, Qk.e)();
      return new bk(new wk(Fk, Bk, Rk), new wk(tk, ak, Xk))
    }

    function RF(kk) {
      (0, kF.c)(kk) || (kk.geometry && kk.geometry.useBoundingInfoFromGeometry ? kk._updateBoundingInfo() : kk.refreshBoundingInfo(!0, !0))
    }
    class tF {
      constructor(kk, Fk) {
        this.ef = kk, this.decode = Fk, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(kk) {
        let Fk = this.viewData.get(kk.index);
        return Fk || (Fk = this.bufferData.then((() => kk.bytes)), this.viewData.set(kk.index, Fk)), Fk
      }
      viewBuffer(kk) {
        let Fk = this.viewBuffers.get(kk.index);
        return Fk || (Fk = this.viewBytes(kk).then((kk => new((0, Qk.e)().Ge)(this.ef.ne(), kk, !1))), this.viewBuffers.set(kk.index, Fk)), Fk
      }
      vertexBuffer(kk, Fk) {
        const {
          kind: Bk,
          data: Rk
        } = Fk, tk = `${kk.index}:${Bk}`;
        let ak = this.vertexBuffers.get(tk);
        if (!ak) {
          const Xk = kk.bufferView;
          ak = Xk ? this.viewBuffer(Xk).then((kk => this.layoutVertexBuffer(kk, Fk))) : Promise.resolve(Rk).then((kk => new((0, Qk.e)().VertexBuffer)(this.ef.ne(), kk, Bk, !1))), this.vertexBuffers.set(tk, ak)
        }
        return ak
      }
      layoutVertexBuffer(kk, Fk) {
        let {
          kind: Bk,
          offset: Rk,
          stride: tk,
          components: ak,
          glType: Xk,
          isNormalized: bk
        } = Fk;
        const wk = this.ef.ne();
        return new((0, Qk.e)().VertexBuffer)(wk, kk, Bk, !1, void 0, tk, void 0, Rk, ak, Xk, bk, !0, void 0, !0)
      }
      load(kk, Fk, Bk) {
        const Rk = (0, kF.c)(Bk),
          tk = kk => {
            Rk || (Bk._delayInfo = Bk._delayInfo || [], -1 === Bk._delayInfo.indexOf(kk) && Bk._delayInfo.push(kk))
          },
          ak = Fk.draco;
        if (ak) {
          for (const kk in ak.attributeIds) tk(kk);
          let Xk = this.dracoGeometry.get(ak.bufferView.index);
          return Xk || (Xk = this.viewBytes(ak.bufferView).then((async () => {
            let tk;
            try {
              tk = await uk(Fk, this.decode)
            } catch (wk) {
              throw new Ek.h(`${kk}: ${wk instanceof Error?wk.message:String(wk)}`)
            }
            const ak = rk(Fk, tk);
            if (Rk) return ak;
            const Xk = BF(Fk.position),
              bk = new((0, Qk.e)().MirroredGeometry)(Bk.name, this.ef);
            Xk && (bk._boundingInfo = Xk, bk.useBoundingInfoFromGeometry = !0), ak.indexData && bk.setIndices(ak.indexData);
            for (const kk of ak.vertexAttributes) bk.setVerticesBuffer(this.layoutVertexBuffer(kk.data, kk), ak.vertexCount);
            return bk.link(ak), bk
          })), this.dracoGeometry.set(ak.bufferView.index, Xk)), Xk
        }
        const Xk = [],
          bk = Gk(Fk);
        if (Rk) return Bk.isUnIndexed = !bk.indexData, Bk.hasVertexAlpha = (0, FF.i)(Fk), Promise.resolve(bk);
        const wk = new((0, Qk.e)().MirroredGeometry)(Bk.name, this.ef),
          {
            indexData: dk
          } = bk;
        dk ? Xk.push(this.viewBytes(Fk.indices.bufferView).then((() => {
          wk.setIndices(dk)
        }))) : Bk.isUnIndexed = !0;
        for (const [sk, {
            kind: Vk,
            accessor: Jk
          }] of Fk.attributes.entries()) tk(Vk), Xk.push(this.vertexBuffer(Jk, bk.vertexAttributes[sk]).then((kk => {
          if ("position" === kk.getKind()) {
            const kk = BF(Jk);
            kk && (wk._boundingInfo = kk, wk.useBoundingInfoFromGeometry = !0)
          }
          wk.setVerticesBuffer(kk, bk.vertexCount)
        })));
        return (0, FF.i)(Fk) && (Bk.hasVertexAlpha = !0), Promise.all(Xk).then((() => (wk.link(bk), wk)))
      }
    }
    var aF, XF = Bk(36950),
      bF = Bk(36754),
      wF = Bk(37570),
      dF = Bk(36903),
      sF = Bk(36939),
      VF = Bk(2626),
      JF = Bk(36930);

    function AF(kk, Fk) {
      kk.metadata = kk.metadata || {};
      const Bk = kk._internalMetadata = kk._internalMetadata || {},
        Rk = Bk.bS = Bk.bS || {};
      (Rk.pointers = Rk.pointers || []).push(Fk)
    }

    function eF(kk, Fk) {
      if (Fk && Object.keys(Fk).length > 0) {
        const Bk = kk.metadata = kk.metadata || {};
        (Bk.bS = Bk.bS || {}).extras = Fk
      }
    }

    function yF(kk, Fk) {
      Fk.position = kk.translation ? bF.Qe.FromArray(kk.translation) : bF.Qe.Zero(), Fk.rotationQuaternion = kk.rotation ? bF.Quaternion.FromArray(kk.rotation) : bF.Quaternion.Identity(), Fk.ta = kk.scale ? bF.Qe.FromArray(kk.scale) : bF.Qe.One()
    }
    class fF {
      constructor(kk, Fk) {
        if (this.ef = kk, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Fk) {
          const Fk = kk.ne(),
            Bk = kk.yN.add((() => {
              this.dispose()
            })),
            Rk = Fk.onContextRestoredObservable.add((() => {
              for (const kk of [...this.geometries, ...this.meshes, ...this.textures]) kk._rebuild()
            }));
          this.release = () => {
            kk.yN.remove(Bk), Fk.onContextRestoredObservable.remove(Rk)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const kk of this.meshes) this.ef.qBk(kk);
          for (const kk of this.materials) this.ef.addMaterial(kk);
          for (const kk of this.geometries) this.ef.addGeometry(kk);
          for (const kk of this.transformNodes) this.ef.addTransformNode(kk);
          for (const kk of this.textures) this.ef.addTexture(kk)
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
    class mF {
      constructor(kk, Fk, Bk, Rk, tk, ak, Xk) {
        this.asset = kk, this.ef = Fk, this.tree = Bk, this.geometryData = tk, this.materials = ak, this.lite = Xk, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Rk ? Bk : null
      }
      create(kk) {
        if (this.lite) return kk();
        const Fk = this.ef;
        Fk._blockEntityCollection = !!this.container;
        try {
          const Fk = kk();
          return this.container && (Fk._parentContainer = this.container), Fk
        } finally {
          Fk._blockEntityCollection = !1
        }
      }
      node(kk, Fk) {
        return this.create((() => this.lite ? Fk ? (0, wF.f)(this.lite, kk) : (0, wF.o)(this.lite, kk) : Fk ? new((0, Qk.e)().Mesh)(kk, this.ef) : new((0, Qk.e)().TransformNode)(kk, this.ef)))
      }
      async load() {
        var kk;
        this.asset.model.json.nodes && this.createRoot();
        const Fk = this.lite ? null : this.ef,
          Bk = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.blockMaterialDirtyMechanism) && void 0 !== kk && kk;
        let Rk;
        Fk && (Fk.blockMaterialDirtyMechanism = !0);
        try {
          Rk = this.loadScene()
        } finally {
          null === Fk || void 0 === Fk || Fk._forceBlockMaterialDirtyMechanism(Bk)
        }
        await Rk;
        const {
          root: tk,
          tree: ak
        } = this;
        tk && (tk.lY(!0), ak.meshes.push(tk), ak.rootNodes.push(tk));
        for (const bk of this.asset.model.nodes) {
          const kk = this.nodeObjects.get(bk.index);
          kk && ["TransformNode", "LiteNode"].includes(kk.getClassName()) && ak.transformNodes.push(kk);
          for (const Fk of null !== (Xk = this.nodePrimitives.get(bk.index)) && void 0 !== Xk ? Xk : []) {
            var Xk;
            ak.meshes.push(Fk);
            const kk = Fk.geometry;
            kk && !ak.geometries.includes(kk) && ak.geometries.push(kk)
          }
        }
      }
      createRoot() {
        const kk = this.node("__root__", !0);
        this.root = kk, kk.lY(!1), this.ef.useRightHandedSystem || yF(hk, kk)
      }
      loadScene() {
        const kk = [];
        for (const Fk of this.asset.model.rootNodes) kk.push(this.loadNode(this.asset.model.nodes[Fk], (kk => {
          kk.parent = this.root
        })));
        return kk.push(Promise.resolve()), Promise.all(kk).then((() => {}))
      }
      loadNode(kk, Fk) {
        const Bk = `/nodes/${kk.index}`,
          Rk = [],
          tk = tk => {
            if (AF(tk, Bk), yF(kk, tk), kk.hasCamera && !this.ef.useRightHandedSystem) {
              const {
                ta: kk
              } = tk;
              kk.set(-1, kk.y, kk.z)
            }
            for (const Fk of kk.children) Rk.push(this.loadNode(this.asset.model.nodes[Fk], (kk => {
              kk.parent = tk
            })));
            (Bk => {
              eF(Bk, kk.extras), Fk(Bk)
            })(tk)
          };
        if (null === kk.mesh) {
          const Fk = this.node(Pk(kk), !1);
          this.nodeObjects.set(kk.index, Fk), tk(Fk)
        } else {
          const Fk = this.asset.model.meshes[kk.mesh];
          Rk.push(this.loadMesh(`/meshes/${Fk.index}`, kk, Fk, tk))
        }
        return Promise.all(Rk).then((() => {
          for (const Bk of null !== (Fk = this.nodePrimitives.get(kk.index)) && void 0 !== Fk ? Fk : []) {
            var Fk;
            RF(Bk)
          }
          return this.nodeObjects.get(kk.index)
        }))
      }
      loadMesh(kk, Fk, Bk, Rk) {
        const tk = [],
          ak = Pk(Fk);
        if (1 === Bk.primitives.length) {
          const Rk = Bk.primitives[0];
          tk.push(this.loadPrimitive(`${kk}/primitives/${Rk.index}`, ak, Rk, (kk => {
            this.nodeObjects.set(Fk.index, kk), this.nodePrimitives.set(Fk.index, [kk])
          })))
        } else {
          const Rk = this.node(ak, !1);
          this.nodeObjects.set(Fk.index, Rk);
          const Xk = [];
          this.nodePrimitives.set(Fk.index, Xk);
          for (const Fk of Bk.primitives) tk.push(this.loadPrimitive(`${kk}/primitives/${Fk.index}`, `${ak}_primitive${Fk.index}`, Fk, (kk => {
            kk.parent = Rk, Xk.push(kk)
          })))
        }
        const Xk = this.nodeObjects.get(Fk.index);
        return Rk(Xk), Promise.all(tk).then((() => Xk))
      }
      loadPrimitive(kk, Fk, Bk, Rk) {
        const tk = [],
          ak = this.node(Fk, !0);
        if (ak.sideOrientation = this.ef.useRightHandedSystem ? dF.c.CounterClockWiseSideOrientation : dF.c.ClockWiseSideOrientation, tk.push(this.geometryData.load(kk, Bk, ak).then((kk => {
            if ((0, kF.c)(ak)) {
              var Fk, Bk;
              const Rk = kk;
              ak.replaceModel(Rk, Int32Array.of(0, null !== (Fk = null === (Bk = Rk.indexData) || void 0 === Bk ? void 0 : Bk.length) && void 0 !== Fk ? Fk : Rk.vertexCount, 0, Rk.vertexCount))
            } else this.create((() => (kk.applyToMesh(ak), kk)))
          }))), this.materials) {
          const kk = 0 === Bk.mode ? dF.c.PointListDrawMode : dF.c.TriangleFillMode,
            Fk = null === Bk.material ? null : this.asset.model.materials[Bk.material];
          tk.push(this.loadMaterial(Fk, kk, (kk => {
            ak.material = kk
          })))
        }
        return AF(ak, kk), Rk(ak), Promise.all(tk).then((() => ak))
      }
      loadMaterial(kk, Fk, Bk) {
        var Rk;
        const tk = `${null!==(Rk=null===kk||void 0===kk?void 0:kk.index)&&void 0!==Rk?Rk:"default"}:${Fk}`;
        let ak = this.materialData.get(tk);
        return ak || (ak = this.createMaterial(kk, Fk), this.materialData.set(tk, ak)), Bk(ak.material), ak.promise
      }
      createMaterial(kk, Fk) {
        const Bk = kk ? kk.name || `material${kk.index}` : "__GLTFLoader._default",
          {
            style: Rk,
            unlit: tk
          } = this.materials;
        let ak;
        const Xk = this.create((() => {
          const Xk = (0, JF.d)({
            name: Bk,
            ef: this.ef,
            sets: {
              ...(0, FF.e)(this.asset, kk, Rk, tk),
              fillMode: Fk
            },
            unrendered: !0
          });
          return ak = Xk.model, Xk.mirror
        }));
        let bk = Promise.resolve();
        if (kk) {
          const Fk = `/materials/${kk.index}`,
            Rk = ak.diffuseTexture;
          if (Rk && !Rk.mirror) bk = new Promise((kk => setTimeout(kk)));
          else if (Rk) {
            const tk = Rk.mirror;
            tk._parentContainer = this.container, tk.name = `${Bk} (Base Color)`, AF(tk, `${Fk}${kk.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(tk), bk = (0, sF.u)(Rk)
          }
          eF(Xk, kk.extras), AF(Xk, Fk)
        }
        return this.tree.materials.push(Xk), {
          material: Xk,
          promise: bk
        }
      }
    }

    function WF() {
      XF.e.dracoDecodes = yk.decodes, XF.e.dracoWorkersStarted = yk.workersStarted, XF.e.dracoMostWorkers = yk.mostWorkers
    }
    async function vF(kk, Fk, Bk, tk, ak) {
      try {
        return await async function(kk, Fk, Bk, tk, ak, Xk) {
          var bk;
          let wk;
          const dk = null === (bk = (0, VF.d)()) || void 0 === bk ? void 0 : bk.Ly,
            sk = null !== dk && void 0 !== dk && dk.Oy && Fk === dk.XN() ? dk : null,
            Vk = ak && !sk;
          return await Ik(kk, Fk, Bk, tk, Rk.e, (kk => (wk = new fF(Fk, Vk), new mF(kk, Fk, wk, Vk, new tF(Fk, tk), Xk, sk).load())), !ak), wk
        }(kk, Fk, Bk, Yk, tk, ak)
      } finally {
        WF()
      }
    }
    async function iF(kk, Fk, Bk, tk) {
      try {
        return await Ik(kk, Fk, Bk, Yk, Rk.e, (kk => tk(kk, new tF(Fk, Yk))))
      } finally {
        WF()
      }
    }
    aF = tk.e, sk || (sk = {
      scriptUrl: new URL(aF.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(aF.wasmBinaryUrl, location.href).href
    })
  },
  40931: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(132),
      tk = Bk(1157);

    function ak(kk) {
      return (0, Rk.c)() ? `https://${tk.b.discordDomain}/${kk.href}` : kk.href
    }
    const Xk = {
      scriptUrl: ak(new Bk.U(Bk(40936))),
      wasmBinaryUrl: ak(new Bk.U(Bk(40939)))
    }
  },
  35991: kk => {
    kk.exports = function(kk, Fk, Bk, Rk) {
      var tk = self || window;
      try {
        try {
          var ak;
          try {
            ak = new tk.Blob([kk])
          } catch (dk) {
            (ak = new(tk.BlobBuilder || tk.WebKitBlobBuilder || tk.MozBlobBuilder || tk.MSBlobBuilder)).append(kk), ak = ak.getBlob()
          }
          var Xk = tk.URL || tk.webkitURL,
            bk = Xk.createObjectURL(ak),
            wk = new tk[Fk](bk, Bk);
          return Xk.revokeObjectURL(bk), wk
        } catch (dk) {
          return new tk[Fk]("data:application/javascript,".concat(encodeURIComponent(kk)), Bk)
        }
      } catch (dk) {
        if (!Rk) throw Error("Inline worker is not supported");
        return new tk[Fk](Rk, Bk)
      }
    }
  },
  40936: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40939: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
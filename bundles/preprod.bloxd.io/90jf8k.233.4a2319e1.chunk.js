export const id = 233;
export const ids = [233];
export const modules = {
  39455: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {}
    CF.AUTOSAMPLERSUFFIX = "Sampler", CF.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", CF.ALPHA_DISABLE = 0, CF.ALPHA_ADD = 1, CF.ALPHA_COMBINE = 2, CF.ALPHA_SUBTRACT = 3, CF.ALPHA_MULTIPLY = 4, CF.ALPHA_MAXIMIZED = 5, CF.ALPHA_ONEONE = 6, CF.ALPHA_PREMULTIPLIED = 7, CF.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, CF.ALPHA_INTERPOLATE = 9, CF.ALPHA_SCREENMODE = 10, CF.ALPHA_ONEONE_ONEONE = 11, CF.ALPHA_ALPHATOCOLOR = 12, CF.ALPHA_REVERSEONEMINUS = 13, CF.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, CF.ALPHA_ONEONE_ONEZERO = 15, CF.ALPHA_EXCLUSION = 16, CF.ALPHA_LAYER_ACCUMULATE = 17, CF.ALPHA_MIN = 18, CF.ALPHA_MAX = 19, CF.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, CF.ALPHA_REPLACE_COLOR = 21, CF.ALPHA_EQUATION_ADD = 0, CF.ALPHA_EQUATION_SUBSTRACT = 1, CF.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, CF.ALPHA_EQUATION_MAX = 3, CF.ALPHA_EQUATION_MIN = 4, CF.ALPHA_EQUATION_DARKEN = 5, CF.DELAYLOADSTATE_NONE = 0, CF.DELAYLOADSTATE_LOADED = 1, CF.DELAYLOADSTATE_LOADING = 2, CF.DELAYLOADSTATE_NOTLOADED = 4, CF.NEVER = 512, CF.ALWAYS = 519, CF.LESS = 513, CF.EQUAL = 514, CF.LEQUAL = 515, CF.GREATER = 516, CF.GEQUAL = 518, CF.NOTEQUAL = 517, CF.KEEP = 7680, CF.ZERO = 0, CF.REPLACE = 7681, CF.INCR = 7682, CF.DECR = 7683, CF.INVERT = 5386, CF.INCR_WRAP = 34055, CF.DECR_WRAP = 34056, CF.TEXTURE_CLAMP_ADDRESSMODE = 0, CF.TEXTURE_WRAP_ADDRESSMODE = 1, CF.TEXTURE_MIRROR_ADDRESSMODE = 2, CF.TEXTURE_REPETITION_NONE = 0, CF.TEXTURE_REPETITION_NOISE_BLEND = 1, CF.TEXTURE_REPETITION_HEX_TILING = 2, CF.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, CF.TEXTURE_REPETITION_VORONOI_BOMBING = 4, CF.TEXTURE_CREATIONFLAG_STORAGE = 1, CF.TEXTUREFORMAT_ALPHA = 0, CF.TEXTUREFORMAT_LUMINANCE = 1, CF.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, CF.TEXTUREFORMAT_RGB = 4, CF.TEXTUREFORMAT_RGBA = 5, CF.TEXTUREFORMAT_RED = 6, CF.TEXTUREFORMAT_R = 6, CF.TEXTUREFORMAT_R16_UNORM = 33322, CF.TEXTUREFORMAT_RG16_UNORM = 33324, CF.TEXTUREFORMAT_RGB16_UNORM = 32852, CF.TEXTUREFORMAT_RGBA16_UNORM = 32859, CF.TEXTUREFORMAT_R16_SNORM = 36760, CF.TEXTUREFORMAT_RG16_SNORM = 36761, CF.TEXTUREFORMAT_RGB16_SNORM = 36762, CF.TEXTUREFORMAT_RGBA16_SNORM = 36763, CF.TEXTUREFORMAT_RG = 7, CF.TEXTUREFORMAT_RED_INTEGER = 8, CF.TEXTUREFORMAT_R_INTEGER = 8, CF.TEXTUREFORMAT_RG_INTEGER = 9, CF.TEXTUREFORMAT_RGB_INTEGER = 10, CF.TEXTUREFORMAT_RGBA_INTEGER = 11, CF.TEXTUREFORMAT_BGRA = 12, CF.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, CF.TEXTUREFORMAT_DEPTH32_FLOAT = 14, CF.TEXTUREFORMAT_DEPTH16 = 15, CF.TEXTUREFORMAT_DEPTH24 = 16, CF.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, CF.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, CF.TEXTUREFORMAT_STENCIL8 = 19, CF.TEXTUREFORMAT_UNDEFINED = 4294967295, CF.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, CF.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, CF.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, CF.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, CF.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, CF.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, CF.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, CF.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, CF.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, CF.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, CF.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, CF.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, CF.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, CF.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, CF.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, CF.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, CF.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, CF.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, CF.TEXTURETYPE_UNSIGNED_BYTE = 0, CF.TEXTURETYPE_UNSIGNED_INT = 0, CF.TEXTURETYPE_FLOAT = 1, CF.TEXTURETYPE_HALF_FLOAT = 2, CF.TEXTURETYPE_BYTE = 3, CF.TEXTURETYPE_SHORT = 4, CF.TEXTURETYPE_UNSIGNED_SHORT = 5, CF.TEXTURETYPE_INT = 6, CF.TEXTURETYPE_UNSIGNED_INTEGER = 7, CF.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, CF.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, CF.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, CF.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, CF.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, CF.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, CF.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, CF.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, CF.TEXTURETYPE_UNDEFINED = 16, CF.TEXTURE_2D = 3553, CF.TEXTURE_2D_ARRAY = 35866, CF.TEXTURE_CUBE_MAP = 34067, CF.TEXTURE_CUBE_MAP_ARRAY = 3735928559, CF.TEXTURE_3D = 32879, CF.TEXTURE_NEAREST_SAMPLINGMODE = 1, CF.TEXTURE_NEAREST_NEAREST = 1, CF.TEXTURE_BILINEAR_SAMPLINGMODE = 2, CF.TEXTURE_LINEAR_LINEAR = 2, CF.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, CF.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, CF.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, CF.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, CF.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, CF.TEXTURE_NEAREST_LINEAR = 7, CF.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, CF.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, CF.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, CF.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, CF.TEXTURE_LINEAR_NEAREST = 12, CF.TEXTURE_EXPLICIT_MODE = 0, CF.TEXTURE_SPHERICAL_MODE = 1, CF.TEXTURE_PLANAR_MODE = 2, CF.TEXTURE_CUBIC_MODE = 3, CF.TEXTURE_PROJECTION_MODE = 4, CF.TEXTURE_SKYBOX_MODE = 5, CF.TEXTURE_INVCUBIC_MODE = 6, CF.TEXTURE_EQUIRECTANGULAR_MODE = 7, CF.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, CF.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, CF.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, CF.TEXTURE_FILTERING_QUALITY_HIGH = 64, CF.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, CF.TEXTURE_FILTERING_QUALITY_LOW = 8, CF.SCALEMODE_FLOOR = 1, CF.SCALEMODE_NEAREST = 2, CF.SCALEMODE_CEILING = 3, CF.MATERIAL_TextureDirtyFlag = 1, CF.MATERIAL_LightDirtyFlag = 2, CF.MATERIAL_FresnelDirtyFlag = 4, CF.MATERIAL_AttributesDirtyFlag = 8, CF.MATERIAL_MiscDirtyFlag = 16, CF.MATERIAL_PrePassDirtyFlag = 32, CF.MATERIAL_ImageProcessingDirtyFlag = 64, CF.MATERIAL_AllDirtyFlag = 127, CF.MATERIAL_TriangleFillMode = 0, CF.MATERIAL_WireFrameFillMode = 1, CF.MATERIAL_PointFillMode = 2, CF.MATERIAL_PointListDrawMode = 3, CF.MATERIAL_LineListDrawMode = 4, CF.MATERIAL_LineLoopDrawMode = 5, CF.MATERIAL_LineStripDrawMode = 6, CF.MATERIAL_TriangleStripDrawMode = 7, CF.MATERIAL_TriangleFanDrawMode = 8, CF.MATERIAL_ClockWiseSideOrientation = 0, CF.MATERIAL_CounterClockWiseSideOrientation = 1, CF.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, CF.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, CF.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, CF.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, CF.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, CF.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, CF.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, CF.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, CF.ACTION_NothingTrigger = 0, CF.ACTION_OnPickTrigger = 1, CF.ACTION_OnLeftPickTrigger = 2, CF.ACTION_OnRightPickTrigger = 3, CF.ACTION_OnCenterPickTrigger = 4, CF.ACTION_OnPickDownTrigger = 5, CF.ACTION_OnDoublePickTrigger = 6, CF.ACTION_OnPickUpTrigger = 7, CF.ACTION_OnPickOutTrigger = 16, CF.ACTION_OnLongPressTrigger = 8, CF.ACTION_OnPointerOverTrigger = 9, CF.ACTION_OnPointerOutTrigger = 10, CF.ACTION_OnEveryFrameTrigger = 11, CF.ACTION_OnIntersectionEnterTrigger = 12, CF.ACTION_OnIntersectionExitTrigger = 13, CF.ACTION_OnKeyDownTrigger = 14, CF.ACTION_OnKeyUpTrigger = 15, CF.PARTICLES_BILLBOARDMODE_Y = 2, CF.PARTICLES_BILLBOARDMODE_ALL = 7, CF.PARTICLES_BILLBOARDMODE_STRETCHED = 8, CF.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, CF.MESHES_CULLINGSTRATEGY_STANDARD = 0, CF.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, CF.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, CF.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, CF.SCENELOADER_NO_LOGGING = 0, CF.SCENELOADER_MINIMAL_LOGGING = 1, CF.SCENELOADER_SUMMARY_LOGGING = 2, CF.SCENELOADER_DETAILED_LOGGING = 3, CF.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, CF.PREPASS_POSITION_TEXTURE_TYPE = 1, CF.PREPASS_VELOCITY_TEXTURE_TYPE = 2, CF.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, CF.PREPASS_COLOR_TEXTURE_TYPE = 4, CF.PREPASS_DEPTH_TEXTURE_TYPE = 5, CF.PREPASS_NORMAL_TEXTURE_TYPE = 6, CF.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, CF.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, CF.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, CF.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, CF.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, CF.PREPASS_ALBEDO_TEXTURE_TYPE = 12, CF.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, CF.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, CF.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, CF.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, CF.BUFFER_CREATIONFLAG_READ = 1, CF.BUFFER_CREATIONFLAG_WRITE = 2, CF.BUFFER_CREATIONFLAG_READWRITE = 3, CF.BUFFER_CREATIONFLAG_UNIFORM = 4, CF.BUFFER_CREATIONFLAG_VERTEX = 8, CF.BUFFER_CREATIONFLAG_INDEX = 16, CF.BUFFER_CREATIONFLAG_STORAGE = 32, CF.BUFFER_CREATIONFLAG_INDIRECT = 64, CF.RENDERPASS_MAIN = 0, CF.INPUT_ALT_KEY = 18, CF.INPUT_CTRL_KEY = 17, CF.INPUT_META_KEY1 = 91, CF.INPUT_META_KEY2 = 92, CF.INPUT_META_KEY3 = 93, CF.INPUT_SHIFT_KEY = 16, CF.SNAPSHOTRENDERING_STANDARD = 0, CF.SNAPSHOTRENDERING_FAST = 1, CF.PERSPECTIVE_CAMERA = 0, CF.ORTHOGRAPHIC_CAMERA = 1, CF.FOVMODE_VERTICAL_FIXED = 0, CF.FOVMODE_HORIZONTAL_FIXED = 1, CF.RIG_MODE_NONE = 0, CF.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, CF.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, CF.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, CF.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, CF.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, CF.RIG_MODE_VR = 20, CF.RIG_MODE_CUSTOM = 22, CF.MAX_SUPPORTED_UV_SETS = 6, CF.GL_ALPHA_EQUATION_ADD = 32774, CF.GL_ALPHA_EQUATION_MIN = 32775, CF.GL_ALPHA_EQUATION_MAX = 32776, CF.GL_ALPHA_EQUATION_SUBTRACT = 32778, CF.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, CF.GL_ALPHA_FUNCTION_SRC = 768, CF.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, CF.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, CF.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, CF.GL_ALPHA_FUNCTION_DST_ALPHA = 772, CF.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, CF.GL_ALPHA_FUNCTION_DST_COLOR = 774, CF.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, CF.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, CF.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, CF.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, CF.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, CF.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, CF.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, CF.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, CF.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, CF.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, CF.SnippetUrl = "https://snippet.babylonjs.com", CF.FOGMODE_NONE = 0, CF.FOGMODE_EXP = 1, CF.FOGMODE_EXP2 = 2, CF.FOGMODE_LINEAR = 3, CF.BYTE = 5120, CF.UNSIGNED_BYTE = 5121, CF.SHORT = 5122, CF.UNSIGNED_SHORT = 5123, CF.INT = 5124, CF.UNSIGNED_INT = 5125, CF.FLOAT = 5126, CF.HALF_FLOAT = 5131, CF.PositionKind = "position", CF.NormalKind = "normal", CF.TangentKind = "tangent", CF.UVKind = "uv", CF.UV2Kind = "uv2", CF.UV3Kind = "uv3", CF.UV4Kind = "uv4", CF.UV5Kind = "uv5", CF.UV6Kind = "uv6", CF.ColorKind = "color", CF.ColorInstanceKind = "instanceColor", CF.MatricesIndicesKind = "matricesIndices", CF.MatricesWeightsKind = "matricesWeights", CF.MatricesIndicesExtraKind = "matricesIndicesExtra", CF.MatricesWeightsExtraKind = "matricesWeightsExtra", CF.ANIMATIONTYPE_FLOAT = 0, CF.ANIMATIONTYPE_VECTOR3 = 1, CF.ANIMATIONTYPE_QUATERNION = 2, CF.ANIMATIONTYPE_MATRIX = 3, CF.ANIMATIONTYPE_COLOR3 = 4, CF.ANIMATIONTYPE_COLOR4 = 7, CF.ANIMATIONTYPE_VECTOR2 = 5, CF.ANIMATIONTYPE_SIZE = 6, CF.ShadowMinZ = 0, CF.ShadowMaxZ = 1e4, CF.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, CF.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  39432: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => dF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35623),
      hF = SF(38230),
      bW = SF(38194);
    let dF = (() => {
      var FF;
      let WF, SF, dF, PF, RF = hF.c,
        iW = [];
      return FF = class extends RF {
        constructor() {
          super(...arguments), this._position = (0, CF.k)(this, iW), this._needProjectionMatrixCompute = !0, this._viewMatrix = uF.b.Identity(), this._projectionMatrix = uF.b.Identity()
        }
        _setPosition(FF) {
          this._position = FF
        }
        get position() {
          return this._position
        }
        set position(FF) {
          this._setPosition(FF)
        }
        _setDirection(FF) {
          this._direction = FF
        }
        get direction() {
          return this._direction
        }
        set direction(FF) {
          this._setDirection(FF)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(FF) {
          this._shadowMinZ = FF, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(FF) {
          this._shadowMaxZ = FF, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = uF.r.Zero()), uF.r.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = uF.r.Zero()), uF.r.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(FF) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(FF) {
          return this.direction = uF.r.Normalize(FF.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const FF = uF.r.Cross(this.direction, bW.b.Y),
            WF = uF.r.Cross(FF, this.direction);
          return uF.r.RotationFromAxis(FF, WF, this.direction)
        }
        needCube() {
          return !1
        }
        needProjectionMatrixCompute() {
          return this._needProjectionMatrixCompute
        }
        forceProjectionMatrixCompute() {
          this._needProjectionMatrixCompute = !0
        }
        _initCache() {
          super._initCache(), this._cache.position = uF.r.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(FF) {
          return !FF && this.isSynchronized() ? (this._currentRenderId = this.OWF().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.fdF(this.position), this._worldMatrix || (this._worldMatrix = uF.b.Identity()), uF.b.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(FF) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : FF?.minZ || 0
        }
        getDepthMaxZ(FF) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : FF?.maxZ || 1e4
        }
        setShadowProjectionMatrix(FF, WF, SF) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(WF, SF, FF) : this._setDefaultShadowProjectionMatrix(FF, WF, SF), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(FF) {
          const WF = uF.j.HC[0];
          let SF = this.position;
          this.computeTransformedInformation() && (SF = this.transformedPosition), uF.r.NormalizeToRef(this.getShadowDirection(FF), WF), 1 === Math.abs(uF.r.Dot(WF, uF.r.Up())) && (WF.z = 1e-13);
          const CF = uF.j.HC[1];
          return SF.addToRef(WF, CF), uF.b.LookAtLHToRef(SF, CF, uF.r.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(FF, WF) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, FF ?? this._viewMatrix, WF ?? []), this._projectionMatrix
        }
      }, (() => {
        const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(RF[Symbol.metadata] ?? null) : void 0;
        WF = [(0, AF.G)()], SF = [(0, AF.G)()], dF = [(0, AF.H)()], PF = [(0, AF.H)()], (0, CF.j)(FF, null, WF, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: FF => "position" in FF,
            get: FF => FF.position
          },
          metadata: uF
        }, null, iW), (0, CF.j)(FF, null, SF, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: FF => "direction" in FF,
            get: FF => FF.direction
          },
          metadata: uF
        }, null, iW), (0, CF.j)(FF, null, dF, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: FF => "shadowMinZ" in FF,
            get: FF => FF.shadowMinZ
          },
          metadata: uF
        }, null, iW), (0, CF.j)(FF, null, PF, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: FF => "shadowMaxZ" in FF,
            get: FF => FF.shadowMaxZ
          },
          metadata: uF
        }, null, iW), uF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uF
        })
      })(), FF
    })()
  },
  39450: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF
    });
    var CF = SF(38448);
    class AF extends CF.i {
      constructor(FF, WF, SF, AF, uF) {
        let hF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          dF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          PF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          RF = arguments.length > 9 ? arguments[9] : void 0,
          iW = arguments.length > 10 ? arguments[10] : void 0,
          eF = arguments.length > 11 ? arguments[11] : void 0,
          EF = arguments.length > 12 ? arguments[12] : void 0;
        super(null, uF, !hF, bW, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, RF), this.format = AF, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== PF || (dF = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== PF || (dF = 1), this._texture = this._engine.createRawTexture(FF, WF, SF, AF, hF, bW, dF, null, PF, RF ?? 0, iW ?? !1, EF), this.wrapU = CF.i.CLAMP_ADDRESSMODE, this.wrapV = CF.i.CLAMP_ADDRESSMODE, this._waitingForData = !!eF && !FF)
      }
      update(FF) {
        this.updateMipLevel(FF, 0)
      }
      updateMipLevel(FF, WF) {
        this._getEngine().updateRawTexture(this._texture, FF, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, WF), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const FF = new AF(null, this.getSize().width, this.getSize().height, this.format, this.OWF(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return FF._texture = this._texture, this._texture.incrementReferences(), FF
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(FF, WF, SF, CF) {
        return new AF(FF, WF, SF, 1, CF, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(FF, WF, SF, CF) {
        return new AF(FF, WF, SF, 2, CF, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(FF, WF, SF, CF) {
        return new AF(FF, WF, SF, 0, CF, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(FF, WF, SF, CF) {
        return new AF(FF, WF, SF, 4, CF, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(FF, WF, SF, CF) {
        return new AF(FF, WF, SF, 5, CF, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(FF, WF, SF, CF) {
        return new AF(FF, WF, SF, 5, CF, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(FF, WF, SF, uF) {
        let hF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          dF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : CF.i.TRILINEAR_SAMPLINGMODE;
        return new AF(FF, WF, SF, 6, uF, hF, bW, dF, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(FF, WF, SF, uF) {
        let hF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          dF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : CF.i.TRILINEAR_SAMPLINGMODE;
        return new AF(FF, WF, SF, 6, uF, hF, bW, dF, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  39486: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF.b
    });
    var CF = SF(38412);
    (0, CF.d)()
  },
  39437: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF.c
    });
    var CF = SF(38431);
    (0, CF.d)()
  },
  38431: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF,
      d: () => rW
    });
    var CF, AF, uF = SF(35678),
      hF = SF(38109),
      bW = SF(38386),
      dF = SF(38434),
      PF = SF(38267),
      RF = SF(38440),
      iW = SF(37855);
    class eF extends bW.d {
      _isShaderMaterial(FF) {
        return !!FF && "ShaderMaterial" === FF.getClassName()
      }
      constructor(FF) {
        let WF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          CF = arguments.length > 5 ? arguments[5] : void 0,
          AF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 ? arguments[7] : void 0;
        super(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, WF, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = CF, this.useVertexAlpha = AF, this.color = new uF.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, WF && (this.color = WF.color.clone(), this.alpha = WF.alpha, this.useVertexColor = WF.useVertexColor, this.useVertexAlpha = WF.useVertexAlpha), this.intersectionThreshold = .1;
        const dF = {
          attributes: [hF.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? dF.defines.push("#define VERTEXALPHA") : dF.needAlphaBlending = !1, this.useVertexColor ? (dF.defines.push("#define VERTEXCOLOR"), dF.attributes.push(hF.k.ColorKind)) : (dF.uniforms.push("color"), this._color4 = new uF.i), bW) this.material = bW;
        else {
          this.OWF().sC().isWebGPU && !eF.ForceGLSL && (this._shaderLanguage = 1), dF.shaderLanguage = this._shaderLanguage, dF.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([SF.e(314).then((() => SF(40410))), SF.e(320).then((() => SF(40413)))]) : await Promise.all([SF.e(296).then((() => SF(40420))), SF.e(302).then((() => SF(40425)))])
          };
          const FF = new RF.p("colorShader", this.OWF(), "color", dF, !1);
          FF.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(FF)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(FF) {
        const WF = this.material;
        if (WF === FF) return;
        const SF = WF && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(FF), SF && WF?.dispose()
      }
      _setInternalMaterial(FF) {
        this._setMaterial(FF), this.material && (this.material.fillMode = PF.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(FF) {}
      _bind(FF, WF) {
        if (!this._geometry) return this;
        const SF = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(WF, SF) : this._geometry._bind(WF, SF, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: FF,
            g: WF,
            b: SF
          } = this.color;
          this._color4.set(FF, WF, SF, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(FF, WF, SF) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const CF = this.OWF().sC();
        return this._unIndexed ? CF.drawArraysType(PF.c.LineListDrawMode, FF.verticesStart, FF.verticesCount, SF) : CF.drawElementsType(PF.c.LineListDrawMode, FF.indexStart, FF.indexCount, SF), this
      }
      dispose(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || WF) && this.material?.dispose(!1, !1, !0), super.dispose(FF)
      }
      clone(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (WF && void 0 === WF._addToSceneRootNodes) {
          const SF = WF;
          return SF.source = this, new eF(FF, this.OWF(), SF.parent, SF.source, SF.doNotCloneChildren)
        }
        return new eF(FF, this.OWF(), WF, this, SF)
      }
      createInstance(FF) {
        const WF = new EF(FF, this);
        if (this.BWF) {
          WF.BWF = {};
          for (const FF in this.BWF) WF.BWF[FF] = this.BWF[FF]
        }
        return WF
      }
      serialize(FF) {
        super.serialize(FF), FF.color = this.color.kRF(), FF.alpha = this.alpha
      }
      static Parse(FF, WF) {
        const SF = new eF(FF.name, WF);
        return SF.color = uF.e.FromArray(FF.color), SF.alpha = FF.alpha, SF
      }
    }
    eF.ForceGLSL = !1;
    class EF extends dF.e {
      constructor(FF, WF) {
        super(FF, WF), this.intersectionThreshold = WF.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let QF = !1;

    function rW() {
      QF || (QF = !0, bW.d._LinesMeshParser = (FF, WF) => eF.Parse(FF, WF))
    }(CF = eF.prototype).enableEdgesRendering ?? (CF.enableEdgesRendering = (0, iW.j)("LinesMesh", "enableEdgesRendering")), (AF = EF.prototype).enableEdgesRendering ?? (AF.enableEdgesRendering = (0, iW.j)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);
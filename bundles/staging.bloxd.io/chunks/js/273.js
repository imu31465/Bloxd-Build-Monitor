export const id = 273;
export const ids = [273];
export const modules = {
  40833: (uu, Eu, ju) => {
    ju.d(Eu, {
      $d: () => ss,
      $e: () => aj,
      $f: () => Oj,
      A: () => TE,
      Ab: () => Uu,
      Bd: () => xE,
      Bf: () => ij,
      Cc: () => fE,
      Db: () => Du,
      Dd: () => Iu,
      De: () => Sj,
      E: () => cu,
      Ec: () => qE,
      Ff: () => Wj,
      Gb: () => gE,
      H: () => UE,
      Hd: () => cE,
      He: () => mj,
      Hf: () => Mj,
      Ib: () => nu,
      Ic: () => jE,
      Id: () => AE,
      Kc: () => du,
      Kd: () => IE,
      L: () => Pu,
      Lb: () => uj,
      Lc: () => eu,
      Le: () => Bj,
      Lf: () => Yj,
      M: () => ku,
      Md: () => uE,
      Mf: () => Qj,
      N: () => ou,
      Ne: () => Fj,
      Ob: () => mu,
      Of: () => wj,
      P: () => BE,
      Pb: () => zu,
      Pc: () => su,
      Pe: () => Ij,
      Qd: () => Ru,
      Qe: () => Zs,
      R: () => Nu,
      Rd: () => Bu,
      Rf: () => ej,
      Sb: () => yu,
      T: () => Lu,
      Tc: () => Ju,
      Td: () => Gu,
      Te: () => Jj,
      Tf: () => xj,
      Uc: () => XE,
      Uf: () => gj,
      Ve: () => oj,
      W: () => Xs,
      Wb: () => EE,
      Wc: () => hu,
      Wd: () => bu,
      We: () => dj,
      Wf: () => Lj,
      Xe: () => kj,
      Xf: () => cj,
      Y: () => RE,
      Yc: () => Yu,
      Yd: () => qj,
      Ye: () => Pj,
      Zb: () => YE,
      _b: () => Tu,
      ab: () => Au,
      ad: () => Ou,
      bb: () => yE,
      bc: () => vu,
      cb: () => zE,
      cc: () => ZE,
      ce: () => Dj,
      d: () => Zu,
      df: () => Us,
      eb: () => Hu,
      ec: () => gu,
      ed: () => Zj,
      ge: () => Gj,
      gf: () => zj,
      h: () => Xu,
      hd: () => Xj,
      i: () => wu,
      ib: () => nE,
      ic: () => Mu,
      id: () => pu,
      ie: () => Nj,
      if: () => us,
      jc: () => CE,
      je: () => Tj,
      jf: () => yj,
      ld: () => Vu,
      lf: () => Rj,
      m: () => iu,
      mb: () => Wu,
      mc: () => fu,
      me: () => tj,
      nc: () => tE,
      nd: () => Ku,
      ne: () => Kj,
      ob: () => sj,
      od: () => Qu,
      pf: () => Es,
      q: () => fj,
      qb: () => Uj,
      qd: () => ru,
      qe: () => rj,
      qf: () => Hj,
      r: () => lj,
      rb: () => Su,
      rc: () => Fu,
      rd: () => OE,
      se: () => Vj,
      t: () => lu,
      tc: () => xu,
      td: () => qu,
      u: () => FE,
      ub: () => jj,
      uf: () => pj,
      vb: () => Ej,
      vc: () => HE,
      vd: () => Cu,
      vf: () => hj,
      w: () => LE,
      wc: () => sE,
      we: () => nj,
      xf: () => Aj,
      yb: () => NE,
      yc: () => bE,
      yd: () => hE,
      z: () => tu,
      zb: () => lE,
      zc: () => au,
      ze: () => vj
    });
    const su = -2147483648,
      Uu = 12,
      Zu = 12,
      Xu = 4095,
      lu = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      qu = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      fu = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      Cu = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      bu = {
        Alive: 16
      },
      cu = 32,
      Nu = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      Ou = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      Yu = 4294967295,
      hu = 0,
      Du = 4294967295,
      gu = 4,
      Mu = 123,
      eu = -2147483648,
      Gu = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      pu = 51,
      wu = 5,
      Ju = 4294967295,
      du = 4294967295,
      au = 128,
      Pu = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      ou = 16,
      ku = 255,
      mu = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      vu = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      Ku = {
        Hotbar: 256,
        Drop: 257
      },
      Vu = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      ru = {
        Rate: 0,
        Gyro: 1
      },
      Qu = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      iu = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      Wu = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      Su = {
        LookPointed: 1,
        Held: 2
      },
      Iu = 3,
      Fu = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      Bu = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      Lu = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      tu = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      xu = {
        Stackable: 1
      },
      Tu = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      Hu = {
        Detail: 1,
        RoomForOne: 2
      },
      Au = {
        HaveIngredients: 1,
        Listed: 2
      },
      nu = {
        HasOpts: 1
      },
      yu = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      zu = {
        Up: 1,
        Down: 2
      },
      Ru = {
        TwoD: 1,
        Loop: 2
      },
      uE = {
        StopAfter: 1
      },
      EE = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      jE = {
        Pose: 1,
        Visible: 2
      },
      sE = 255,
      UE = 65535,
      ZE = 255,
      XE = 65535,
      lE = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      qE = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      fE = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      CE = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      bE = 4294967295,
      cE = 4294967295,
      NE = 255,
      OE = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      YE = {
        critical: 123
      },
      hE = 4294967295,
      DE = {
        BYTES: 4,
        Tb: (uu, Eu) => uu.getUint32(Eu + 0, !0)
      },
      gE = {
        BYTES: 12,
        serverId: (uu, Eu) => uu.getInt32(Eu + 0, !0),
        index: (uu, Eu) => uu.getUint32(Eu + 4, !0),
        kind: (uu, Eu) => uu.getUint16(Eu + 8, !0)
      },
      ME = {
        BYTES: 20,
        pos: (uu, Eu, ju) => uu.getInt32(Eu + 0 + 4 * ju, !0),
        actual: (uu, Eu) => uu.getUint32(Eu + 12, !0),
        dataLen: (uu, Eu) => uu.getUint32(Eu + 16, !0)
      },
      eE = {
        BYTES: 20,
        what: (uu, Eu) => uu.getUint8(Eu + 0),
        value: (uu, Eu) => uu.getInt16(Eu + 2, !0),
        pos: (uu, Eu, ju) => uu.getInt32(Eu + 4 + 4 * ju, !0),
        block: (uu, Eu) => uu.getUint32(Eu + 16, !0)
      },
      GE = {
        BYTES: 4,
        item: (uu, Eu) => uu.getUint16(Eu + 0, !0),
        slot: (uu, Eu) => uu.getUint8(Eu + 2)
      },
      pE = {
        BYTES: 16,
        target: (uu, Eu) => uu.getInt32(Eu + 0, !0),
        damage: (uu, Eu) => uu.getFloat32(Eu + 4, !0),
        distance: (uu, Eu) => uu.getFloat32(Eu + 8, !0),
        crit: (uu, Eu) => uu.getUint8(Eu + 12)
      },
      wE = {
        BYTES: 4,
        slot: (uu, Eu) => uu.getUint16(Eu + 0, !0)
      },
      JE = {
        BYTES: 20,
        what: (uu, Eu) => uu.getUint8(Eu + 0),
        value: (uu, Eu) => uu.getInt16(Eu + 2, !0),
        pos: (uu, Eu, ju) => uu.getInt32(Eu + 4 + 4 * ju, !0),
        block: (uu, Eu) => uu.getUint32(Eu + 16, !0)
      },
      dE = {
        BYTES: 12,
        serverId: (uu, Eu) => uu.getInt32(Eu + 0, !0),
        index: (uu, Eu) => uu.getUint32(Eu + 4, !0),
        what: (uu, Eu) => uu.getUint16(Eu + 8, !0)
      },
      aE = {
        BYTES: 24,
        cx: (uu, Eu) => uu.getInt32(Eu + 0, !0),
        cy: (uu, Eu) => uu.getInt32(Eu + 4, !0),
        cz: (uu, Eu) => uu.getInt32(Eu + 8, !0),
        slot: (uu, Eu) => uu.getUint32(Eu + 12, !0),
        generation: (uu, Eu) => uu.getUint32(Eu + 16, !0),
        flags: (uu, Eu) => uu.getUint32(Eu + 20, !0)
      },
      PE = {
        BYTES: 44,
        pos: (uu, Eu, ju) => uu.getFloat64(Eu + 0 + 8 * ju, !0),
        sound: (uu, Eu) => uu.getUint16(Eu + 24, !0),
        flags: (uu, Eu) => uu.getUint16(Eu + 26, !0),
        handle: (uu, Eu) => uu.getUint32(Eu + 28, !0),
        volume: (uu, Eu) => uu.getFloat32(Eu + 32, !0),
        rate: (uu, Eu) => uu.getFloat32(Eu + 36, !0),
        refDist: (uu, Eu) => uu.getFloat32(Eu + 40, !0)
      },
      oE = {
        BYTES: 28,
        pos: (uu, Eu, ju) => uu.getFloat64(Eu + 0 + 8 * ju, !0),
        handle: (uu, Eu) => uu.getUint32(Eu + 24, !0)
      },
      kE = {
        BYTES: 16,
        handle: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        volume: (uu, Eu) => uu.getFloat32(Eu + 4, !0),
        rate: (uu, Eu) => uu.getFloat32(Eu + 8, !0),
        refDist: (uu, Eu) => uu.getFloat32(Eu + 12, !0)
      },
      mE = {
        BYTES: 12,
        handle: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        to: (uu, Eu) => uu.getFloat32(Eu + 4, !0),
        ms: (uu, Eu) => uu.getUint16(Eu + 8, !0),
        flags: (uu, Eu) => uu.getUint16(Eu + 10, !0)
      },
      vE = {
        BYTES: 4,
        handle: (uu, Eu) => uu.getUint32(Eu + 0, !0)
      },
      KE = {
        BYTES: 8,
        reason: (uu, Eu) => uu.getUint8(Eu + 0),
        code: (uu, Eu) => uu.getUint8(Eu + 1),
        version: (uu, Eu) => uu.getUint32(Eu + 4, !0)
      },
      VE = {
        BYTES: 4,
        key: (uu, Eu) => uu.getUint8(Eu + 0),
        tag: (uu, Eu) => uu.getUint8(Eu + 1)
      },
      rE = {
        BYTES: 16,
        save: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        index: (uu, Eu) => uu.getUint32(Eu + 4, !0),
        ptr: (uu, Eu) => uu.getUint32(Eu + 8, !0),
        len: (uu, Eu) => uu.getUint32(Eu + 12, !0)
      },
      QE = {
        BYTES: 16,
        save: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        kind: (uu, Eu) => uu.getUint8(Eu + 4),
        parts: (uu, Eu) => uu.getUint32(Eu + 8, !0),
        bytes: (uu, Eu) => uu.getUint32(Eu + 12, !0)
      },
      iE = {
        BYTES: 4,
        totalTicks: (uu, Eu) => uu.getUint32(Eu + 0, !0)
      },
      WE = {
        BYTES: 24,
        what: (uu, Eu) => uu.getUint8(Eu + 0),
        int: (uu, Eu) => uu.getInt32(Eu + 4, !0),
        x: (uu, Eu) => uu.getFloat64(Eu + 8, !0),
        y: (uu, Eu) => uu.getFloat64(Eu + 16, !0)
      },
      SE = {
        BYTES: 8,
        what: (uu, Eu) => uu.getUint8(Eu + 0),
        kind: (uu, Eu) => uu.getUint8(Eu + 1),
        save: (uu, Eu) => uu.getUint32(Eu + 4, !0)
      },
      IE = {
        BYTES: 4,
        VC: (uu, Eu) => uu.getUint16(Eu + 0, !0)
      },
      FE = {
        BYTES: 360,
        eye: (uu, Eu, ju) => uu.getFloat64(Eu + 0 + 8 * ju, !0),
        localPos: (uu, Eu, ju) => uu.getFloat64(Eu + 24 + 8 * ju, !0),
        Auu: (uu, Eu, ju) => uu.getFloat64(Eu + 48 + 8 * ju, !0),
        viewProj: (uu, Eu, ju) => uu.getFloat32(Eu + 72 + 4 * ju, !0),
        origin: (uu, Eu, ju) => uu.getInt32(Eu + 136 + 4 * ju, !0),
        heading: (uu, Eu) => uu.getFloat32(Eu + 148, !0),
        pitch: (uu, Eu) => uu.getFloat32(Eu + 152, !0),
        tanHalfFovX: (uu, Eu) => uu.getFloat32(Eu + 156, !0),
        tanHalfFovY: (uu, Eu) => uu.getFloat32(Eu + 160, !0),
        viewportCss: (uu, Eu, ju) => uu.getFloat32(Eu + 164 + 4 * ju, !0),
        localVel: (uu, Eu, ju) => uu.getFloat32(Eu + 172 + 4 * ju, !0),
        actionDir: (uu, Eu, ju) => uu.getFloat32(Eu + 184 + 4 * ju, !0),
        localId: (uu, Eu) => uu.getInt32(Eu + 196, !0),
        playerFlags: (uu, Eu) => uu.getUint32(Eu + 200, !0),
        targetBlock: (uu, Eu, ju) => uu.getInt32(Eu + 204 + 4 * ju, !0),
        targetAdjacent: (uu, Eu, ju) => uu.getInt32(Eu + 216 + 4 * ju, !0),
        targetBlockId: (uu, Eu) => uu.getUint32(Eu + 228, !0),
        targetNormal: (uu, Eu, ju) => uu.getInt8(Eu + 232 + 1 * ju),
        targetFlags: (uu, Eu) => uu.getUint8(Eu + 235),
        pickedEntity: (uu, Eu) => uu.getInt32(Eu + 236, !0),
        breakingPos: (uu, Eu, ju) => uu.getInt32(Eu + 240 + 4 * ju, !0),
        breakingProgress: (uu, Eu) => uu.getFloat32(Eu + 252, !0),
        nG: (uu, Eu) => uu.getUint16(Eu + 256, !0),
        selectedSlot: (uu, Eu) => uu.getUint8(Eu + 258),
        heldFlags: (uu, Eu) => uu.getUint8(Eu + 259),
        heldAttrVersion: (uu, Eu) => uu.getUint32(Eu + 260, !0),
        inventoryVersion: (uu, Eu) => uu.getUint32(Eu + 264, !0),
        effectsVersion: (uu, Eu) => uu.getUint32(Eu + 268, !0),
        entitiesVersion: (uu, Eu) => uu.getUint32(Eu + 272, !0),
        entRenderPtr: (uu, Eu) => uu.getUint32(Eu + 276, !0),
        entCapacity: (uu, Eu) => uu.getUint32(Eu + 280, !0),
        frameMs: (uu, Eu) => uu.getFloat32(Eu + 284, !0),
        fps: (uu, Eu) => uu.getFloat32(Eu + 288, !0),
        entVisPtr: (uu, Eu) => uu.getUint32(Eu + 292, !0),
        momentumFrac: (uu, Eu) => uu.getFloat32(Eu + 296, !0),
        chunkSlotsPtr: (uu, Eu) => uu.getUint32(Eu + 300, !0),
        chunkSlotsLen: (uu, Eu) => uu.getUint32(Eu + 304, !0),
        walkThroughPtr: (uu, Eu) => uu.getUint32(Eu + 308, !0),
        walkThroughLen: (uu, Eu) => uu.getUint32(Eu + 312, !0),
        audioViewPtr: (uu, Eu) => uu.getUint32(Eu + 316, !0),
        inventoryViewPtr: (uu, Eu) => uu.getUint32(Eu + 320, !0),
        eventOverflowGen: (uu, Eu) => uu.getUint32(Eu + 324, !0),
        eventOverflowMask: (uu, Eu) => uu.getUint32(Eu + 328, !0),
        promptEntity: (uu, Eu) => uu.getInt32(Eu + 332, !0),
        replayViewPtr: (uu, Eu) => uu.getUint32(Eu + 336, !0),
        slotIcon: (uu, Eu) => uu.getUint32(Eu + 340, !0),
        localDeaths: (uu, Eu) => uu.getUint32(Eu + 344, !0),
        cameraFar: (uu, Eu) => uu.getFloat32(Eu + 348, !0),
        gliderBoostFuel: (uu, Eu) => uu.getUint32(Eu + 352, !0),
        interactLabel: (uu, Eu) => uu.getUint16(Eu + 356, !0),
        interactIcon: (uu, Eu) => uu.getUint16(Eu + 358, !0)
      },
      BE = {
        BYTES: 16,
        voxelsPtr: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        version: (uu, Eu) => uu.getUint32(Eu + 4, !0),
        generation: (uu, Eu) => uu.getUint32(Eu + 8, !0),
        dl: (uu, Eu) => uu.getUint32(Eu + 12, !0)
      },
      LE = {
        BYTES: 56,
        listener: (uu, Eu, ju) => uu.getFloat64(Eu + 0 + 8 * ju, !0),
        forward: (uu, Eu, ju) => uu.getFloat32(Eu + 24 + 4 * ju, !0),
        up: (uu, Eu, ju) => uu.getFloat32(Eu + 36 + 4 * ju, !0),
        dropped: (uu, Eu) => uu.getUint32(Eu + 48, !0),
        unfollowed: (uu, Eu) => uu.getUint32(Eu + 52, !0)
      },
      tE = {
        BYTES: 8,
        item: (uu, Eu) => uu.getUint16(Eu + 0, !0),
        amount: (uu, Eu) => uu.getUint16(Eu + 2, !0),
        attrVersion: (uu, Eu) => uu.getUint32(Eu + 4, !0)
      },
      xE = {
        BYTES: 76,
        version: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        state: (uu, Eu) => uu.getUint8(Eu + 4),
        cameraMode: (uu, Eu) => uu.getUint8(Eu + 5),
        Tb: (uu, Eu) => uu.getUint32(Eu + 8, !0),
        totalTicks: (uu, Eu) => uu.getUint32(Eu + 12, !0),
        speed: (uu, Eu) => uu.getFloat32(Eu + 16, !0),
        markIn: (uu, Eu) => uu.getUint32(Eu + 20, !0),
        markOut: (uu, Eu) => uu.getUint32(Eu + 24, !0),
        editVersion: (uu, Eu) => uu.getUint32(Eu + 28, !0),
        drops: (uu, Eu, ju) => uu.getUint32(Eu + 32 + 4 * ju, !0)
      },
      TE = {
        BYTES: 6,
        flags: (uu, Eu) => uu.getUint8(Eu + 0),
        harvestType: (uu, Eu) => uu.getUint8(Eu + 1),
        harvestLevel: (uu, Eu) => uu.getUint8(Eu + 2),
        attachedTop: (uu, Eu) => uu.getUint16(Eu + 4, !0)
      },
      HE = {
        BYTES: 3,
        flags: (uu, Eu) => uu.getUint8(Eu + 0),
        harvests: (uu, Eu) => uu.getUint8(Eu + 1),
        level: (uu, Eu) => uu.getUint8(Eu + 2)
      },
      AE = {
        BYTES: 12,
        item: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        amount: (uu, Eu) => uu.getFloat64(Eu + 4, !0)
      },
      nE = {
        BYTES: 16,
        recipes: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        ingredients: (uu, Eu) => uu.getUint32(Eu + 4, !0),
        craftAllTimes: (uu, Eu) => uu.getUint32(Eu + 8, !0),
        flags: (uu, Eu) => uu.getUint32(Eu + 12, !0)
      },
      yE = {
        BYTES: 10,
        item: (uu, Eu) => uu.getUint16(Eu + 0, !0),
        recipe: (uu, Eu) => uu.getUint16(Eu + 2, !0),
        produces: (uu, Eu) => uu.getUint16(Eu + 4, !0),
        requires: (uu, Eu) => uu.getUint16(Eu + 6, !0),
        flags: (uu, Eu) => uu.getUint8(Eu + 8)
      },
      zE = {
        BYTES: 4,
        amount: (uu, Eu) => uu.getUint16(Eu + 0, !0),
        items: (uu, Eu) => uu.getUint16(Eu + 2, !0)
      },
      RE = {
        BYTES: 8,
        amount: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        item: (uu, Eu) => uu.getUint16(Eu + 4, !0),
        from: (uu, Eu) => uu.getUint16(Eu + 6, !0)
      },
      uj = {
        BYTES: 16,
        serverId: (uu, Eu) => uu.getInt32(Eu + 0, !0),
        len: (uu, Eu) => uu.getUint32(Eu + 4, !0),
        kind: (uu, Eu) => uu.getUint16(Eu + 8, !0),
        variation: (uu, Eu) => uu.getUint16(Eu + 10, !0),
        pose: (uu, Eu) => uu.getUint8(Eu + 12),
        meta: (uu, Eu) => uu.getUint8(Eu + 13),
        mesh: (uu, Eu) => uu.getUint8(Eu + 14),
        flags: (uu, Eu) => uu.getUint8(Eu + 15)
      },
      Ej = {
        BYTES: 56,
        terrainOpaque: (uu, Eu) => uu.getUint32(Eu + 0, !0),
        terrainTransparent: (uu, Eu) => uu.getUint32(Eu + 4, !0),
        terrainPack: (uu, Eu) => uu.getUint32(Eu + 8, !0),
        earthSky: (uu, Eu) => uu.getUint32(Eu + 12, !0),
        skyMeshes: (uu, Eu) => uu.getUint32(Eu + 16, !0),
        regular: (uu, Eu) => uu.getUint32(Eu + 20, !0),
        thin: (uu, Eu) => uu.getUint32(Eu + 24, !0),
        line: (uu, Eu) => uu.getUint32(Eu + 28, !0),
        text: (uu, Eu) => uu.getUint32(Eu + 32, !0),
        particles: (uu, Eu) => uu.getUint32(Eu + 36, !0),
        terrainParts: (uu, Eu) => uu.getUint32(Eu + 40, !0),
        terrainCompiling: (uu, Eu) => uu.getUint32(Eu + 44, !0),
        ringCopiesMax: (uu, Eu) => uu.getUint32(Eu + 48, !0),
        ringBusyWrites: (uu, Eu) => uu.getUint32(Eu + 52, !0)
      },
      jj = {
        BYTES: 16,
        fov: (uu, Eu) => uu.getFloat32(Eu + 0, !0),
        baseFov: (uu, Eu) => uu.getFloat32(Eu + 4, !0),
        aspect: (uu, Eu) => uu.getFloat32(Eu + 8, !0),
        bodyHeading: (uu, Eu) => uu.getFloat32(Eu + 12, !0)
      },
      sj = {
        BYTES: 32,
        eye: (uu, Eu, ju) => uu.getFloat64(Eu + 0 + 8 * ju, !0),
        heading: (uu, Eu) => uu.getFloat32(Eu + 24, !0),
        pitch: (uu, Eu) => uu.getFloat32(Eu + 28, !0)
      },
      Uj = {
        BYTES: 40,
        feet: (uu, Eu, ju) => uu.getFloat64(Eu + 0 + 8 * ju, !0),
        eyeHeight: (uu, Eu) => uu.getFloat32(Eu + 24, !0),
        heading: (uu, Eu) => uu.getFloat32(Eu + 28, !0),
        headingIsDrawn: (uu, Eu) => uu.getUint32(Eu + 32, !0)
      },
      Zj = 32,
      Xj = 63,
      lj = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function qj(uu, Eu, ju, su, Uu) {
      var Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju, du, au, Pu, ou, ku;
      switch (uu) {
        case 32:
          return 4 === su && (null === (Zu = Uu.tickEnd) || void 0 === Zu || Zu.call(Uu, DE.Tb(Eu, ju)), !0);
        case 33:
          return 12 === su && (null === (Xu = Uu.entitySpawned) || void 0 === Xu || Xu.call(Uu, gE.serverId(Eu, ju), gE.index(Eu, ju), gE.kind(Eu, ju)), !0);
        case 34:
          return 12 === su && (null === (lu = Uu.entityDespawned) || void 0 === lu || lu.call(Uu, gE.serverId(Eu, ju), gE.index(Eu, ju), gE.kind(Eu, ju)), !0);
        case 39:
          return !(su < 20) && (null === (qu = Uu.changeBlockFail) || void 0 === qu || qu.call(Uu, ME.pos(Eu, ju, 0), ME.pos(Eu, ju, 1), ME.pos(Eu, ju, 2), ME.actual(Eu, ju), ME.dataLen(Eu, ju), ju + 20, su - 20), !0);
        case 46:
          return 0 === su && (null === (fu = Uu.changeBlockFailEnd) || void 0 === fu || fu.call(Uu), !0);
        case 48:
          return 20 === su && (null === (Cu = Uu.inventoryEvent) || void 0 === Cu || Cu.call(Uu, eE.what(Eu, ju), eE.value(Eu, ju), eE.pos(Eu, ju, 0), eE.pos(Eu, ju, 1), eE.pos(Eu, ju, 2), eE.block(Eu, ju)), !0);
        case 49:
          return 4 === su && (null === (bu = Uu.heldItemChanged) || void 0 === bu || bu.call(Uu, GE.item(Eu, ju), GE.slot(Eu, ju)), !0);
        case 50:
          return 16 === su && (null === (cu = Uu.shotDamage) || void 0 === cu || cu.call(Uu, pE.target(Eu, ju), pE.damage(Eu, ju), pE.distance(Eu, ju), pE.crit(Eu, ju)), !0);
        case 51:
          return !(su < 4) && (null === (Nu = Uu.enchantOffer) || void 0 === Nu || Nu.call(Uu, wE.slot(Eu, ju), ju + 4, su - 4), !0);
        case 52:
          return !(su < 20) && (null === (Ou = Uu.uiEvent) || void 0 === Ou || Ou.call(Uu, JE.what(Eu, ju), JE.value(Eu, ju), JE.pos(Eu, ju, 0), JE.pos(Eu, ju, 1), JE.pos(Eu, ju, 2), JE.block(Eu, ju), ju + 20, su - 20), !0);
        case 53:
          return 12 === su && (null === (Yu = Uu.entityInfoChanged) || void 0 === Yu || Yu.call(Uu, dE.serverId(Eu, ju), dE.index(Eu, ju), dE.what(Eu, ju)), !0);
        case 55:
          return 24 === su && (null === (hu = Uu.chunkSlot) || void 0 === hu || hu.call(Uu, aE.cx(Eu, ju), aE.cy(Eu, ju), aE.cz(Eu, ju), aE.slot(Eu, ju), aE.generation(Eu, ju), aE.flags(Eu, ju)), !0);
        case 40:
          return 44 === su && (null === (Du = Uu.playSound) || void 0 === Du || Du.call(Uu, PE.pos(Eu, ju, 0), PE.pos(Eu, ju, 1), PE.pos(Eu, ju, 2), PE.sound(Eu, ju), PE.flags(Eu, ju), PE.handle(Eu, ju), PE.volume(Eu, ju), PE.rate(Eu, ju), PE.refDist(Eu, ju)), !0);
        case 41:
          return 28 === su && (null === (gu = Uu.soundPos) || void 0 === gu || gu.call(Uu, oE.pos(Eu, ju, 0), oE.pos(Eu, ju, 1), oE.pos(Eu, ju, 2), oE.handle(Eu, ju)), !0);
        case 42:
          return 16 === su && (null === (Mu = Uu.soundSet) || void 0 === Mu || Mu.call(Uu, kE.handle(Eu, ju), kE.volume(Eu, ju), kE.rate(Eu, ju), kE.refDist(Eu, ju)), !0);
        case 43:
          return 12 === su && (null === (eu = Uu.soundFade) || void 0 === eu || eu.call(Uu, mE.handle(Eu, ju), mE.to(Eu, ju), mE.ms(Eu, ju), mE.flags(Eu, ju)), !0);
        case 44:
          return 4 === su && (null === (Gu = Uu.soundStop) || void 0 === Gu || Gu.call(Uu, vE.handle(Eu, ju)), !0);
        case 45:
          return 0 === su && (null === (pu = Uu.soundReset) || void 0 === pu || pu.call(Uu), !0);
        case 56:
          return 8 === su && (null === (wu = Uu.replayFailed) || void 0 === wu || wu.call(Uu, KE.reason(Eu, ju), KE.code(Eu, ju), KE.version(Eu, ju)), !0);
        case 57:
          return !(su < 4) && (null === (Ju = Uu.replayOption) || void 0 === Ju || Ju.call(Uu, VE.key(Eu, ju), VE.tag(Eu, ju), ju + 4, su - 4), !0);
        case 58:
          return 16 === su && (null === (du = Uu.replayFilePart) || void 0 === du || du.call(Uu, rE.save(Eu, ju), rE.index(Eu, ju), rE.ptr(Eu, ju), rE.len(Eu, ju)), !0);
        case 59:
          return 16 === su && (null === (au = Uu.replayFileReady) || void 0 === au || au.call(Uu, QE.save(Eu, ju), QE.kind(Eu, ju), QE.parts(Eu, ju), QE.bytes(Eu, ju)), !0);
        case 60:
          return !(su < 4) && (null === (Pu = Uu.replayOpened) || void 0 === Pu || Pu.call(Uu, iE.totalTicks(Eu, ju), ju + 4, su - 4), !0);
        case 61:
          return !(su < 24) && (null === (ou = Uu.replayUiEvent) || void 0 === ou || ou.call(Uu, WE.what(Eu, ju), WE.int(Eu, ju), WE.x(Eu, ju), WE.y(Eu, ju), ju + 24, su - 24), !0);
        case 62:
          return 8 === su && (null === (ku = Uu.recorderEvent) || void 0 === ku || ku.call(Uu, SE.what(Eu, ju), SE.kind(Eu, ju), SE.save(Eu, ju)), !0);
        default:
          return !1
      }
    }
    const fj = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let Cj = new Uint8Array(0);

    function bj(uu) {
      return Cj.buffer !== uu.buffer && (Cj = new Uint8Array(uu.buffer)), Cj
    }

    function cj(uu, Eu, ju) {
      const su = uu.NN(66, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint8(su + 0, ju), !0
    }

    function Nj(uu, Eu, ju) {
      const su = uu.NN(67, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint32(su + 0, ju, !0), !0
    }

    function Oj(uu, Eu, ju) {
      const su = uu.NN(68, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint8(su + 0, ju), !0
    }

    function Yj(uu, Eu, ju, su) {
      const Uu = uu.NN(69, Eu, 4 + su.length);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      return Zu.setUint8(Uu + 0, ju), bj(Zu).set(su, Zu.byteOffset + Uu + 4), !0
    }

    function hj(uu, Eu, ju, su, Uu) {
      const Zu = uu.NN(128, Eu, 4 + Uu.length);
      if (Zu < 0) return !1;
      const Xu = uu.view;
      return Xu.setUint8(Zu + 0, ju), Xu.setUint16(Zu + 2, su, !0), bj(Xu).set(Uu, Xu.byteOffset + Zu + 4), !0
    }

    function Dj(uu, Eu, ju) {
      const su = uu.NN(131, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setInt32(su + 0, ju, !0), !0
    }

    function gj(uu, Eu, ju) {
      const su = uu.NN(132, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint32(su + 0, ju, !0), !0
    }

    function Mj(uu, Eu, ju) {
      const su = uu.NN(133, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint32(su + 0, ju, !0), !0
    }

    function ej(uu, Eu, ju) {
      const su = uu.NN(144, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint8(su + 0, ju), !0
    }

    function Gj(uu, Eu, ju, su, Uu) {
      const Zu = uu.NN(145, Eu, 12);
      if (Zu < 0) return !1;
      const Xu = uu.view;
      return Xu.setInt32(Zu + 0, ju, !0), Xu.setInt32(Zu + 4, su, !0), Xu.setInt32(Zu + 8, Uu, !0), !0
    }

    function pj(uu, Eu, ju, su) {
      const Uu = uu.NN(256, Eu, 4 + su.length);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      return Zu.setUint16(Uu + 0, ju, !0), bj(Zu).set(su, Zu.byteOffset + Uu + 4), !0
    }

    function wj(uu, Eu, ju) {
      const su = uu.NN(258, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint8(su + 0, ju), !0
    }

    function Jj(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
      const fu = uu.NN(320, Eu, 48 + qu.length);
      if (fu < 0) return !1;
      const Cu = uu.view;
      Cu.setUint32(fu + 0, ju, !0), Cu.setUint16(fu + 4, su, !0), Cu.setUint16(fu + 6, Uu, !0), Cu.setUint32(fu + 8, Zu, !0);
      for (let bu = 0; bu < 3; bu++) Cu.setFloat64(fu + 12 + 8 * bu, Xu[bu], !0);
      for (let bu = 0; bu < 3; bu++) Cu.setFloat32(fu + 36 + 4 * bu, lu[bu], !0);
      return bj(Cu).set(qu, Cu.byteOffset + fu + 48), !0
    }

    function dj(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
      const fu = uu.NN(321, Eu, 48 + qu.length);
      if (fu < 0) return !1;
      const Cu = uu.view;
      Cu.setUint32(fu + 0, ju, !0), Cu.setInt32(fu + 4, su, !0), Cu.setUint16(fu + 8, Uu, !0), Cu.setUint16(fu + 10, Zu, !0);
      for (let bu = 0; bu < 3; bu++) Cu.setFloat64(fu + 12 + 8 * bu, Xu[bu], !0);
      for (let bu = 0; bu < 3; bu++) Cu.setFloat32(fu + 36 + 4 * bu, lu[bu], !0);
      return bj(Cu).set(qu, Cu.byteOffset + fu + 48), !0
    }

    function aj(uu, Eu, ju, su, Uu, Zu, Xu) {
      const lu = uu.NN(322, Eu, 44 + Xu.length);
      if (lu < 0) return !1;
      const qu = uu.view;
      qu.setUint32(lu + 0, ju, !0), qu.setUint32(lu + 4, su, !0);
      for (let fu = 0; fu < 3; fu++) qu.setFloat64(lu + 8 + 8 * fu, Uu[fu], !0);
      for (let fu = 0; fu < 3; fu++) qu.setFloat32(lu + 32 + 4 * fu, Zu[fu], !0);
      return bj(qu).set(Xu, qu.byteOffset + lu + 44), !0
    }

    function Pj(uu, Eu, ju) {
      const su = uu.NN(323, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint32(su + 0, ju, !0), !0
    }

    function oj(uu, Eu, ju, su, Uu, Zu) {
      const Xu = uu.NN(324, Eu, 32 + Zu.length);
      if (Xu < 0) return !1;
      const lu = uu.view;
      lu.setUint32(Xu + 0, ju, !0), lu.setUint32(Xu + 4, su, !0);
      for (let qu = 0; qu < 3; qu++) lu.setFloat64(Xu + 8 + 8 * qu, Uu[qu], !0);
      return bj(lu).set(Zu, lu.byteOffset + Xu + 32), !0
    }

    function kj(uu, Eu) {
      return !(uu.NN(325, Eu, 0) < 0)
    }

    function mj(uu, Eu, ju, su, Uu, Zu) {
      const Xu = uu.NN(384, Eu, 16);
      if (Xu < 0) return !1;
      const lu = uu.view;
      return lu.setUint32(Xu + 0, ju, !0), lu.setUint32(Xu + 4, su, !0), lu.setFloat32(Xu + 8, Uu, !0), lu.setFloat32(Xu + 12, Zu, !0), !0
    }

    function vj(uu, Eu, ju, su, Uu, Zu, Xu) {
      const lu = uu.NN(385, Eu, 36 + Xu.length);
      if (lu < 0) return !1;
      const qu = uu.view;
      qu.setUint32(lu + 0, ju, !0), qu.setUint32(lu + 4, su, !0);
      for (let fu = 0; fu < 3; fu++) qu.setFloat64(lu + 8 + 8 * fu, Uu[fu], !0);
      return qu.setUint32(lu + 32, Zu, !0), bj(qu).set(Xu, qu.byteOffset + lu + 36), !0
    }

    function Kj(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
      const fu = uu.NN(386, Eu, 56 + qu.length);
      if (fu < 0) return !1;
      const Cu = uu.view;
      Cu.setUint32(fu + 0, ju, !0), Cu.setUint8(fu + 4, su);
      for (let bu = 0; bu < 4; bu++) Cu.setFloat32(fu + 8 + 4 * bu, Uu[bu], !0);
      for (let bu = 0; bu < 3; bu++) Cu.setFloat64(fu + 24 + 8 * bu, Zu[bu], !0);
      return Cu.setUint32(fu + 48, Xu, !0), Cu.setUint32(fu + 52, lu, !0), bj(Cu).set(qu, Cu.byteOffset + fu + 56), !0
    }

    function Vj(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
      const fu = uu.NN(387, Eu, 56);
      if (fu < 0) return !1;
      const Cu = uu.view;
      Cu.setUint32(fu + 0, ju, !0), Cu.setUint16(fu + 4, su, !0), Cu.setUint8(fu + 6, Uu);
      for (let bu = 0; bu < 3; bu++) Cu.setFloat64(fu + 8 + 8 * bu, Zu[bu], !0);
      for (let bu = 0; bu < 2; bu++) Cu.setFloat32(fu + 32 + 4 * bu, Xu[bu], !0);
      Cu.setFloat32(fu + 40, lu, !0);
      for (let bu = 0; bu < 3; bu++) Cu.setFloat32(fu + 44 + 4 * bu, qu[bu], !0);
      return !0
    }

    function rj(uu, Eu, ju) {
      const su = uu.NN(388, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint32(su + 0, ju, !0), !0
    }

    function Qj(uu, Eu, ju, su) {
      const Uu = uu.NN(389, Eu, 8);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      return Zu.setInt32(Uu + 0, ju, !0), Zu.setFloat32(Uu + 4, su, !0), !0
    }

    function ij(uu, Eu, ju, su) {
      const Uu = uu.NN(390, Eu, 8);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      return Zu.setInt32(Uu + 0, ju, !0), Zu.setFloat32(Uu + 4, su, !0), !0
    }

    function Wj(uu, Eu, ju, su, Uu, Zu) {
      const Xu = uu.NN(391, Eu, 12);
      if (Xu < 0) return !1;
      const lu = uu.view;
      return lu.setFloat32(Xu + 0, ju, !0), lu.setFloat32(Xu + 4, su, !0), lu.setUint8(Xu + 8, Uu), lu.setUint8(Xu + 9, Zu), !0
    }

    function Sj(uu, Eu, ju) {
      const su = uu.NN(392, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint32(su + 0, ju, !0), !0
    }

    function Ij(uu, Eu, ju, su, Uu) {
      const Zu = uu.NN(393, Eu, 12);
      if (Zu < 0) return !1;
      const Xu = uu.view;
      return Xu.setUint32(Zu + 0, ju, !0), Xu.setUint16(Zu + 4, su, !0), Xu.setFloat32(Zu + 8, Uu, !0), !0
    }

    function Fj(uu, Eu, ju, su, Uu, Zu, Xu) {
      const lu = uu.NN(394, Eu, 36);
      if (lu < 0) return !1;
      const qu = uu.view;
      qu.setUint32(lu + 0, ju, !0), qu.setUint16(lu + 4, su, !0), qu.setUint8(lu + 6, Uu);
      for (let fu = 0; fu < 3; fu++) qu.setFloat64(lu + 8 + 8 * fu, Zu[fu], !0);
      return qu.setFloat32(lu + 32, Xu, !0), !0
    }

    function Bj(uu, Eu, ju) {
      const su = uu.NN(398, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setUint32(su + 0, ju, !0), !0
    }

    function Lj(uu, Eu, ju) {
      const su = uu.NN(448, Eu, 4);
      if (su < 0) return !1;
      return uu.view.setFloat32(su + 0, ju, !0), !0
    }

    function tj(uu, Eu, ju, su) {
      const Uu = uu.NN(450, Eu, 12);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      for (let Xu = 0; Xu < 2; Xu++) Zu.setFloat32(Uu + 0 + 4 * Xu, ju[Xu], !0);
      return Zu.setUint8(Uu + 8, su), !0
    }

    function xj(uu, Eu, ju, su) {
      const Uu = uu.NN(452, Eu, 8);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      return Zu.setFloat32(Uu + 0, ju, !0), Zu.setUint8(Uu + 4, su), !0
    }

    function Tj(uu, Eu, ju, su, Uu) {
      const Zu = uu.NN(454, Eu, 4);
      if (Zu < 0) return !1;
      const Xu = uu.view;
      return Xu.setUint8(Zu + 0, ju), Xu.setUint8(Zu + 1, su), Xu.setUint8(Zu + 2, Uu), !0
    }

    function Hj(uu, Eu, ju, su) {
      const Uu = uu.NN(455, Eu, 40);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      for (let Xu = 0; Xu < 9; Xu++) Zu.setInt32(Uu + 0 + 4 * Xu, ju[Xu], !0);
      return Zu.setUint32(Uu + 36, su, !0), !0
    }

    function Aj(uu, Eu, ju, su) {
      const Uu = uu.NN(456, Eu, 8);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      return Zu.setFloat32(Uu + 0, ju, !0), Zu.setUint8(Uu + 4, su), !0
    }

    function nj(uu, Eu, ju, su, Uu) {
      const Zu = uu.NN(457, Eu, 16);
      if (Zu < 0) return !1;
      const Xu = uu.view;
      for (let lu = 0; lu < 3; lu++) Xu.setInt32(Zu + 0 + 4 * lu, ju[lu], !0);
      for (let lu = 0; lu < 3; lu++) Xu.setInt8(Zu + 12 + 1 * lu, su[lu]);
      return Xu.setUint8(Zu + 15, Uu), !0
    }

    function yj(uu, Eu, ju, su) {
      const Uu = uu.NN(530, Eu, 4 + su.length);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      return Zu.setUint8(Uu + 0, ju), bj(Zu).set(su, Zu.byteOffset + Uu + 4), !0
    }

    function zj(uu, Eu, ju, su, Uu, Zu) {
      const Xu = uu.NN(531, Eu, 12 + Zu.length);
      if (Xu < 0) return !1;
      const lu = uu.view;
      return lu.setFloat32(Xu + 0, ju, !0), lu.setFloat32(Xu + 4, su, !0), lu.setUint32(Xu + 8, Uu, !0), bj(lu).set(Zu, lu.byteOffset + Xu + 12), !0
    }

    function Rj(uu, Eu, ju, su, Uu, Zu) {
      const Xu = uu.NN(532, Eu, 12 + Zu.length);
      if (Xu < 0) return !1;
      const lu = uu.view;
      return lu.setInt32(Xu + 0, ju, !0), lu.setInt32(Xu + 4, su, !0), lu.setUint32(Xu + 8, Uu, !0), bj(lu).set(Zu, lu.byteOffset + Xu + 12), !0
    }

    function us(uu, Eu, ju, su, Uu) {
      const Zu = uu.NN(533, Eu, 8 + Uu.length);
      if (Zu < 0) return !1;
      const Xu = uu.view;
      return Xu.setInt32(Zu + 0, ju, !0), Xu.setInt32(Zu + 4, su, !0), bj(Xu).set(Uu, Xu.byteOffset + Zu + 8), !0
    }

    function Es(uu, Eu) {
      return !(uu.NN(576, Eu, 0) < 0)
    }

    function ss(uu, Eu, ju, su, Uu, Zu) {
      const Xu = uu.NN(577, Eu, 36 + Zu.length);
      if (Xu < 0) return !1;
      const lu = uu.view;
      lu.setUint8(Xu + 0, ju);
      for (let qu = 0; qu < 16; qu++) lu.setUint8(Xu + 4 + 1 * qu, su[qu]);
      for (let qu = 0; qu < 16; qu++) lu.setUint8(Xu + 20 + 1 * qu, Uu[qu]);
      return bj(lu).set(Zu, lu.byteOffset + Xu + 36), !0
    }

    function Us(uu, Eu, ju, su) {
      const Uu = uu.NN(578, Eu, 4 + su.length);
      if (Uu < 0) return !1;
      const Zu = uu.view;
      return Zu.setUint8(Uu + 0, ju), bj(Zu).set(su, Zu.byteOffset + Uu + 4), !0
    }

    function Zs(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
      const qu = uu.NN(579, Eu, 36);
      if (qu < 0) return !1;
      const fu = uu.view;
      return fu.setFloat64(qu + 0, ju, !0), fu.setFloat64(qu + 8, su, !0), fu.setFloat64(qu + 16, Uu, !0), fu.setFloat64(qu + 24, Zu, !0), fu.setUint16(qu + 32, Xu, !0), fu.setUint8(qu + 34, lu), !0
    }
    class Xs {
      constructor(uu, Eu) {
        this.core = uu, this.afterCall = Eu
      }
      canModify(uu, Eu, ju) {
        const su = this.core.PZu(uu, Eu, ju);
        return this.afterCall(), su
      }
      terrainBlocked(uu, Eu, ju, su, Uu) {
        const Zu = this.core.gXu(uu, Eu, ju, su, Uu);
        return this.afterCall(), Zu
      }
      lK(uu, Eu, ju, su) {
        const Uu = this.core.Rc(uu, Eu, ju, su);
        return this.afterCall(), Uu
      }
      blockData(uu, Eu, ju) {
        const su = this.core.dZu(uu, Eu, ju);
        return this.afterCall(), su
      }
      cameraSweep(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = this.core.dUu(uu, Eu, ju, su, Uu, Zu, Xu);
        return this.afterCall(), lu
      }
      hasServerTarget(uu) {
        const Eu = this.core.IZu(uu);
        return this.afterCall(), Eu
      }
      entityInteractable(uu) {
        const Eu = this.core.rZu(uu);
        return this.afterCall(), Eu
      }
      entityCrouching(uu) {
        const Eu = this.core.VZu(uu);
        return this.afterCall(), Eu
      }
      predictServerPosition(uu, Eu, ju, su) {
        const Uu = this.core.zZu(uu, Eu, ju, su);
        return this.afterCall(), Uu
      }
      setOtherEntitySetting(uu, Eu, ju) {
        const su = this.core.mUu(uu, Eu, ju);
        return this.afterCall(), su
      }
      entityInfoBatch(uu) {
        const Eu = this.core.VUu(uu);
        return this.afterCall(), Eu
      }
      entityName(uu) {
        const Eu = this.core.QZu(uu);
        return this.afterCall(), Eu
      }
      hasEffect(uu, Eu) {
        const ju = this.core.SZu(uu, Eu);
        return this.afterCall(), ju
      }
      scratchPtr() {
        const uu = this.core.pUu();
        return this.afterCall(), uu
      }
      invSwap(uu, Eu) {
        const ju = this.core.TZu(uu, Eu);
        return this.afterCall(), ju
      }
      invMove(uu, Eu, ju) {
        const su = this.core.LZu(uu, Eu, ju);
        return this.afterCall(), su
      }
      invQuickMove(uu, Eu, ju, su) {
        const Uu = this.core.tZu(uu, Eu, ju, su);
        return this.afterCall(), Uu
      }
      invRemove(uu, Eu, ju) {
        const su = this.core.xZu(uu, Eu, ju);
        return this.afterCall(), su
      }
      invEnchant(uu, Eu, ju, su, Uu) {
        const Zu = this.core.BZu(uu, Eu, ju, su, Uu);
        return this.afterCall(), Zu
      }
      craft(uu, Eu, ju) {
        const su = this.core.craft(uu, Eu, ju);
        return this.afterCall(), su
      }
      salvage(uu, Eu, ju) {
        const su = this.core.salvage(uu, Eu, ju);
        return this.afterCall(), su
      }
      selectSlot(uu) {
        const Eu = this.core.jXu(uu);
        return this.afterCall(), Eu
      }
      closeChest() {
        const uu = this.core.oZu();
        return this.afterCall(), uu
      }
      itemAttributesBatch(uu) {
        const Eu = this.core.KUu(uu);
        return this.afterCall(), Eu
      }
      itemNames() {
        const uu = this.core.Yk();
        return this.afterCall(), uu
      }
      blockProps() {
        const uu = this.core.aZu();
        return this.afterCall(), uu
      }
      itemProps() {
        const uu = this.core.HZu();
        return this.afterCall(), uu
      }
      salvageRecipe(uu) {
        const Eu = this.core.QUu(uu);
        return this.afterCall(), Eu
      }
      craftingView(uu, Eu, ju) {
        const su = this.core.vUu(uu, Eu, ju);
        return this.afterCall(), su
      }
      directorView() {
        const uu = this.core.JUu();
        return this.afterCall(), uu
      }
      directorDefaultPose() {
        const uu = this.core.aUu();
        return this.afterCall(), uu
      }
      directorEntity(uu) {
        const Eu = this.core.PUu(uu);
        return this.afterCall(), Eu
      }
      directorPose(uu, Eu, ju, su, Uu, Zu) {
        const Xu = this.core.oUu(uu, Eu, ju, su, Uu, Zu);
        return this.afterCall(), Xu
      }
      passTimings(uu) {
        const Eu = this.core.yZu(uu);
        return this.afterCall(), Eu
      }
      drawCensus() {
        const uu = this.core.KZu();
        return this.afterCall(), uu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);